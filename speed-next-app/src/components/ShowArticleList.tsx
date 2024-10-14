"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard'; // Ensure you have this component
import { Article } from './Article'; // Ensure you have this type
import { useSearchParams } from 'next/navigation'; // Import for search params

function ShowArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const searchParams = useSearchParams(); // To get search params from URL
  const searchTerm = searchParams.get("search") || ""; // Get the search term from the URL

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

  // Log the searched term to the console whenever it changes
  useEffect(() => {
    console.log("Searched Term:", searchTerm);
  }, [searchTerm]);

  // Filter articles based on the search term if there is one
  const filteredArticles = searchTerm
    ? articles.filter((article) =>
        article.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articles;

  const hasPendingArticles = filteredArticles.some((article) => article.status === 'Pending');
  const approvedArticles = filteredArticles.filter((article) => article.status === 'Approved');

  const articleList =
    filteredArticles.length === 0
      ? 'There are no article records!'
      : approvedArticles.map((article, k) => (
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

        {/* Notification banner for pending articles */}
        {hasPendingArticles && (
          <div className="alert alert-warning text-center" role="alert">
            There are articles in the moderation queue that need to be reviewed!
          </div>
        )}

        <div className="list">{articleList}</div>
      </div>
    </div>
  );
}

export default ShowArticleList;
