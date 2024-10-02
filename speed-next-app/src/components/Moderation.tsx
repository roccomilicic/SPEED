'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCard'; // Ensure you have this component
import { Article } from './Article'; // Ensure you have this type

function ModerationList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch the articles from the API endpoint
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log('Error from ShowArticleList: ' + err);
      });
  }, []);

  // Filter the articles to show only those in "Pending" status for moderation
  const moderationArticles = articles.filter(article => article.status === 'Pending');

  const articleList =
    moderationArticles.length === 0
      ? 'There are no articles pending moderation!'
      : moderationArticles.map((article, k) => (
          <ArticleCard article={article} key={k} />
        ));

  return (
    <div className='ShowArticleList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Articles Pending Moderation</h2>
          </div>
          <div className='col-md-11'>
            <Link href='/create-article' className='btn btn-outline-warning float-right'>
              + Add New Article
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className='list'>{articleList}</div>
      </div>
    </div>
  );
}

export default ModerationList;
