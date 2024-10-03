import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Article, DefaultEmptyArticle } from "./Article";

const CreateArticleComponent = () => {
  const navigate = useRouter();
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value }); 
    setErrors({ ...errors, [name]: "" }); 
  };

  console.log("Article:", article);

  const validateDOI = (doi: string): boolean => {
    const doiPattern = /^10\.\d{4,}(?:\.\d+)*\/[^\s]+$/;
    return doiPattern.test(doi);
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!article.title) newErrors.title = "Title is required";
    if (!article.authors) newErrors.authors = "Authors are required";
    if (!article.source) newErrors.source = "Source is required";
    if (!article.year_of_publication) {
      newErrors.year_of_publication = "Year of Publication is required";
    } else if (
      article.year_of_publication <= 1600 ||
      article.year_of_publication > new Date().getFullYear()
    ) {
      newErrors.year_of_publication =
        "Year of Publication must be above 1600 and less than or equal to " +
        new Date().getFullYear();
    }
    if (!article.doi) {
      newErrors.doi = "DOI is required";
    } else if (!validateDOI(article.doi)) {
      newErrors.doi = "DOI format must be 10.XXXX/YYYY";
    }
    if (!article.summary) newErrors.summary = "Summary is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!validate()) {
      return; // Stop submission if validation fails
    }

  
    console.log("Submitting article:", article);
  
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Article created:", data);
        setArticle(DefaultEmptyArticle); // Reset the article to the default state
        navigate.push("/"); // Redirect to the articles list
      })
      .catch((err) => {
        console.log("Error from CreateArticle: " + err);
      });
  };
  

  return (
    <div className="CreateArticle">
      <div className="container">
        <div className="row">
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
                />
                {errors.title && <div className="text-danger">{errors.title}</div>}
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
                />
                {errors.authors && <div className="text-danger">{errors.authors}</div>}
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
                />
                {errors.source && <div className="text-danger">{errors.source}</div>}
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
                />
                {errors.year_of_publication && (
                  <div className="text-danger">{errors.year_of_publication}</div>
                )}
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
                />
                {errors.doi && <div className="text-danger">{errors.doi}</div>}
              </div>
              <br />
              <div className="form-group">
                <textarea
                  placeholder="Summary"
                  name="summary"
                  className="form-control"
                  value={article.summary}
                  onChange={onChange}
                />
                {errors.summary && <div className="text-danger">{errors.summary}</div>}
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
