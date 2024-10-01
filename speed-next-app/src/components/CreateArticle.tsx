import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Article, DefaultEmptyArticle } from "./Article";

const CreateArticleComponent = () => {
  const navigate = useRouter();
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(article);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
      });

      if (!res.ok) {
        throw new Error('Failed to create article');
      }

      const newArticle = await res.json(); // Get the created article if needed
      console.log("Article created:", newArticle);

      setArticle(DefaultEmptyArticle); // Reset the article state
      navigate.push("/"); // Redirect to the article list
    } catch (err) {
      console.log("Error from CreateArticle: " + err);
    }
  };

  return (
    <div className="CreateArticle">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link href="/" className="btn btn-outline-warning float-left">
              Show Article List
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Add Article</h1>
            <p className="lead text-center">Create new article</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Article"
                  name="title"
                  className="form-control"
                  value={article.title}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Authors"
                  name="authors"
                  className="form-control"
                  value={article.authors}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Source"
                  name="source"
                  className="form-control"
                  value={article.source}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Year of Publication"
                  name="year_of_publication"
                  className="form-control"
                  value={article.year_of_publication || ""}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="DOI"
                  name="doi"
                  className="form-control"
                  value={article.doi}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <textarea
                  placeholder="Summary"
                  name="summary"
                  className="form-control"
                  value={article.summary}
                  onChange={onChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticleComponent;
