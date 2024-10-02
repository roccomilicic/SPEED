import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article, DefaultEmptyArticle } from './Article'; // Ensure you have a DefaultEmptyArticle defined
import Link from 'next/link';

function UpdateArticleInfo() {
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);
  const id = useParams<{ id: string }>().id;
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`) // Use environment variable
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch article details.'); // Throw error for non-2xx responses
        }
        return res.json();
      })
      .then((json) => {
        setArticle(json);
      })
      .catch((err) => {
        console.log('Error from UpdateArticleInfo: ' + err);
      });
  }, [id]); // Include id in the dependency array

  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const textAreaOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update article.'); // Throw error for non-2xx responses
        }
        router.push(`/show-article/${id}`); // Redirect to the article details page
      })
      .catch((err) => {
        console.log('Error from UpdateArticleInfo: ' + err);
      });
  };

  return (
    <div className='UpdateArticleInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link href='/' className='btn btn-outline-warning float-left'>
              Show Article List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Article</h1>
            <p className='lead text-center'>Update Articles Info</p>
          </div>
        </div>
        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Article'
                name='title'
                className='form-control'
                value={article.title || ''} // Handle undefined case
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='authors'>Authors</label>
              <input
                type='text'
                placeholder='Authors'
                name='authors'
                className='form-control'
                value={article.authors || ''} // Handle undefined case
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='source'>Source</label>
              <input
                type='text'
                placeholder='Source'
                name='source'
                className='form-control'
                value={article.source || ''} // Handle undefined case
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='year_of_publication'>Year of Publication</label>
              <input
                type='number'
                placeholder='Year of Publication'
                name='year_of_publication'
                className='form-control'
                value={article.year_of_publication || ''} // Handle undefined case
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='doi'>DOI</label>
              <input
                type='text'
                placeholder='DOI'
                name='doi'
                className='form-control'
                value={article.doi || ''} // Handle undefined case
                onChange={inputOnChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='summary'>Summary</label>
              <textarea
                placeholder='Summary of the Article'
                name='summary'
                className='form-control'
                value={article.summary || ''} // Handle undefined case
                onChange={textAreaOnChange}
              />
            </div>
            <br />
            <button type='submit' className='btn btn-outline-info btn-lg btn-block'>
              Update Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateArticleInfo;
