import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard'; // Ensure you have this component
import { Article } from './Article'; // Ensure you have this type

function ShowArticleList() {
  const [pendingArticles, setPendingArticles] = useState<Article[]>([]);
  const [approvedArticles, setApprovedArticles] = useState<Article[]>([]);
  const [rejectedArticles, setRejectedArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch pending articles
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/pending`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((articles) => {
        setPendingArticles(articles);
      })
      .catch((err) => {
        console.log('Error fetching pending articles: ' + err);
      });

    // Fetch approved articles
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/approved`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((articles) => {
        setApprovedArticles(articles);
      })
      .catch((err) => {
        console.log('Error fetching approved articles: ' + err);
      });

    // Fetch rejected articles
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/rejected`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((articles) => {
        setRejectedArticles(articles);
      })
      .catch((err) => {
        console.log('Error fetching rejected articles: ' + err);
      });
  }, []);

  const pendingArticleList =
    pendingArticles.length === 0
      ? 'No pending articles'
      : pendingArticles.map((article, k) => (
          <ArticleCard article={article} key={`pending-${k}`} />
        ));

  const approvedArticleList =
    approvedArticles.length === 0
      ? 'No approved articles'
      : approvedArticles.map((article, k) => (
          <ArticleCard article={article} key={`approved-${k}`} />
        ));

  const rejectedArticleList =
    rejectedArticles.length === 0
      ? 'No rejected articles'
      : rejectedArticles.map((article, k) => (
          <ArticleCard article={article} key={`rejected-${k}`} />
        ));

  return (
    <div className="ShowArticleList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Articles List</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3>Pending Articles</h3>
            <div className="list">{pendingArticleList}</div>
          </div>

          <div className="col-md-12">
            <h3>Approved Articles</h3>
            <div className="list">{approvedArticleList}</div>
          </div>

          <div className="col-md-12">
            <h3>Rejected Articles</h3>
            <div className="list">{rejectedArticleList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowArticleList;
