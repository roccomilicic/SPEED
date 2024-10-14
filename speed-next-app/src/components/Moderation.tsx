'use client';
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard'; // Ensure you have this component
import { Article } from './Article'; // Ensure you have this type
import { useSearchParams } from 'next/navigation'; // For retrieving search term

function ModerationList() {
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
        console.log('Error from ModerationList: ' + err);
        setError('Failed to fetch articles.');
      } finally {
        setLoading(false); // Stop loading whether it succeeded or failed
      }
    };

    fetchArticles();
  }, []);

  // Function to handle status change
  const handleStatusChange = async (articleId: string, newStatus: 'Approved' | 'Rejected') => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${articleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!res.ok) {
        throw new Error('Failed to update article status.');
      }

      // Update the local state
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article._id === articleId ? { ...article, status: newStatus } : article
        )
      );
    } catch (err) {
      console.log('Error updating article status: ' + err);
      setError('Failed to update article status.');
    }
  };

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

  // Filter the articles to show only those in "Pending" status and match search term
  const filteredArticles = articles
    .filter(article => article.status === 'Pending') // Only show pending articles
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
      ? <div className='text-center'>There are no articles pending moderation!</div>
      : filteredArticles.map((article, k) => (
          <div key={k} className="article-card">
            <ArticleCard article={article} />
            <div className="moderation-buttons">
              <button onClick={() => handleStatusChange(article._id!, 'Approved')} className="btn btn-success">
                Approve
              </button>
              <button onClick={() => handleStatusChange(article._id!, 'Rejected')} className="btn btn-danger">
                Reject
              </button>
            </div>
          </div>
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
