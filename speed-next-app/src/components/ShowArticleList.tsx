import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard'; // Ensure you have this component
import { Article } from './Article'; // Ensure you have this type

function ShowArticleList() {
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

  const articleList =
    articles.length === 0
      ? 'There are no article records!'
      : articles.map((article, k) => (
          <ArticleCard article={article} key={k} />
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
        <div className="list">{articleList}</div>
      </div>
    </div>
  );
}

export default ShowArticleList;
