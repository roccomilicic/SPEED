'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article, DefaultEmptyArticle } from './Article'; // Ensure you have a DefaultEmptyArticle defined
import Link from 'next/link';

function ShowArticleDetails() {
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);
  const [error, setError] = useState<string | null>(null); // State to hold error messages
  const id = useParams<{ id: string }>().id;

  const navigate = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`) // Corrected string interpolation
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok'); // Throw error for non-2xx responses
        }
        return res.json();
      })
      .then((json) => {
        setArticle(json);
      })
      .catch((err) => {
        setError('Error fetching article details: ' + err.message);
        console.log('Error from ShowArticleDetails: ' + err);
      });
  }, [id]);
  

  const onDeleteClick = (id: string) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`, { method: 'DELETE' }) // Corrected string interpolation
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok'); // Throw error for non-2xx responses
        }
        navigate.push('/'); // Redirect after deletion
      })
      .catch((err) => {
        setError('Error deleting article: ' + err.message);
        console.log('Error from ShowArticleDetails_deleteClick: ' + err);
      });
  };

  const ArticleItem = (
    <div>
      <table className='table table-hover table-dark table-striped table-bordered'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{article.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Authors</td>
            <td>{article.authors}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Source</td>
            <td>{article.source}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Year of Publication</td>
            <td>{article.year_of_publication}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>DOI</td>
            <td>{article.doi}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Summary</td>
            <td>{article.summary}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowArticleDetails'>
      <div className='container'>
        {error && <div className='alert alert-danger'>{error}</div>} {/* Display error message if it exists */}
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br />
            <br />
            <Link href='/' className='btn btn-outline-warning float-left'>
              Show Article List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Articles Record</h1>
            <p className='lead text-center'>View Articles Info</p>
            <hr />
            <br />
          </div>
          <div className='col-md-10 m-auto'>{ArticleItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(article._id || ''); // Pass the article ID, safely checks for _id
              }}
            >
              Delete Article
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link href={`/edit-article/${article._id}`} className='btn btn-outline-info btn-lg btn-block'>
              Edit Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowArticleDetails;
