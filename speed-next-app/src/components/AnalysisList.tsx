'use client';
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard'; // Ensure you have this component
import { Article } from './Article'; // Ensure you have this type
import { useSearchParams } from 'next/navigation'; // For retrieving search term

function AnalysisList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams(); // To get search params from URL
  const searchTerm = searchParams.get("search") || ""; // Get the search term from the URL

  useEffect(() => {
    // Fetch the articles from the API endpoint
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.log('Error from AnalysisList: ' + err);
        setError('Failed to fetch articles.');
      } finally {
        setLoading(false); // Stop loading whether it succeeded or failed
      }
    };

    fetchArticles();
  }, []);

  // Helper function to match search term across all article fields
  const articleMatchesSearch = (article: Article) => {
    const searchLower = searchTerm.toLowerCase();

    // Concatenate all relevant fields into a single string for search
    const combinedFields = `
      ${article.title || ''} 
      ${article.authors || ''} 
      ${article.source || ''} 
      ${article.year_of_publication || ''} 
      ${article.doi || ''} 
      ${article.summary || ''}
    `.toLowerCase();

    return combinedFields.includes(searchLower);
  };

  // Filter the articles to show only those with "Approved" status and match search term
  const filteredArticles = articles
    .filter(article => article.status === 'Approved') // Only show approved articles
    .filter(articleMatchesSearch); // Apply search term filter

  // Check loading and error states
  if (loading) {
    return <div className="text-center">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-danger text-center">{error}</div>;
  }

  const articleList =
    filteredArticles.length === 0
      ? <div className='text-center'>There are no articles ready for analysis!</div>
      : filteredArticles.map((article, k) => (
          <div key={k} className="article-card">
            <ArticleCard article={article} />
          </div>
        ));

  return (
    <div className='ShowArticleList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Articles Ready for Analysis</h2>
          </div>
          <div className='col-md-11'>
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

export default AnalysisList;
