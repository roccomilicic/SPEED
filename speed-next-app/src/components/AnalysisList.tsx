'use client';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import ArticleCard from './ArticleCard'; // Ensure you have this component
import { Article } from './Article'; // Ensure you have this type
import { useSearchParams } from 'next/navigation'; // For retrieving search term
=======
import { Article } from './Article';
import './AnalysisList.css'; 
>>>>>>> origin/main

function AnalysisList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const searchParams = useSearchParams(); // To get search params from URL
  const searchTerm = searchParams.get("search") || ""; // Get the search term from the URL
=======
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [editedArticle, setEditedArticle] = useState<Article | null>(null);
>>>>>>> origin/main

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`);
        if (!res.ok) {
          throw new Error('Network response error');
        }
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        const errorMessage = (err instanceof Error) ? err.message : 'Failed to fetch articles';
        console.log('Error while fetching articles: ' + errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

<<<<<<< HEAD
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
=======
  const analysisArticles = articles.filter(article => article.status === 'Approved');
>>>>>>> origin/main

  if (loading) {
    return <div className="AnalysisList-loading">Loading articles...</div>;
  }

  if (error) {
    return <div className="AnalysisList-error">{error}</div>;
  }

<<<<<<< HEAD
  const articleList =
    filteredArticles.length === 0
      ? <div className='text-center'>There are no articles ready for analysis!</div>
      : filteredArticles.map((article, k) => (
          <div key={k} className="article-card">
            <ArticleCard article={article} />
          </div>
        ));
=======
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (editedArticle) {
      setEditedArticle({ ...editedArticle, [name]: value });
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticleId(article._id ?? null);
    setEditedArticle(article);
  };

  const handleSave = async () => {
    try {
      console.log('Edited article data:', editedArticle); 
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${editingArticleId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedArticle),
      });

      if (!res.ok) {
        throw new Error('Error saving article');
      }

      alert('Article updated successfully!');
      setEditingArticleId(null);

      const updatedArticles = articles.map(article =>
        article._id === editingArticleId ? editedArticle : article
      ).filter(article => article !== null) as Article[];

      setArticles(updatedArticles);
    } catch (error) {
      alert('Failed to save: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  const articleList = analysisArticles.length === 0 ? (
    <div className="AnalysisList-no-articles">No articles ready for analysis!</div>
  ) : (
    <table className="AnalysisList-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Source</th>
          <th>Year</th>
          <th>DOI</th>
          <th>Claim</th>
          <th>Evidence</th>
          <th>Rating</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {analysisArticles.map(article => (
          <React.Fragment key={article._id}>
            <tr>
              <td>{article.title}</td>
              <td>{article.authors}</td>
              <td>{article.source}</td>
              <td>{article.year_of_publication}</td>
              <td>{article.doi}</td>
              <td>{article.claim || 'No claims'}</td>
              <td>{article.evidence || 'No evidence'}</td>
              <td>{article.rating || 'No ratings'}</td>
              <td>{article.status}</td>
              <td>
                <button className="AnalysisList-edit-btn" onClick={() => handleEdit(article)}>Edit</button>
              </td>
            </tr>
            {editingArticleId === article._id && (
              <tr>
                <td colSpan={10}>
                  <div className="AnalysisList-edit-form">
                    <label>Title</label>
                    <input type="text" name="title" value={editedArticle?.title} onChange={handleInputChange} />
                    <label>Authors</label>
                    <input type="text" name="authors" value={editedArticle?.authors} onChange={handleInputChange} />
                    <label>Source</label>
                    <input type="text" name="source" value={editedArticle?.source} onChange={handleInputChange} />
                    <label>Year of Publication</label>
                    <input type="number" name="year_of_publication" value={editedArticle?.year_of_publication} onChange={handleInputChange} />
                    <label>DOI</label>
                    <input type="text" name="doi" value={editedArticle?.doi} onChange={handleInputChange} />
                    <label>Claim</label>
                    <input type="text" name="claim" value={editedArticle?.claim || ''} onChange={handleInputChange} />
                    <label>Evidence</label>
                    <input type="text" name="evidence" value={editedArticle?.evidence || ''} onChange={handleInputChange} />
                    <label>Rating</label>
                    <input type="text" name="rating" value={editedArticle?.rating || ''} onChange={handleInputChange} />
                    <button className="AnalysisList-save-btn" onClick={handleSave}>Save</button>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
>>>>>>> origin/main

  return (
    <div className='AnalysisList'>
      <div className='AnalysisList-container'>
        <div className='AnalysisList-header'>
          <h1>Articles Ready for Analysis</h1>
          <hr />
        </div>
        <div className='AnalysisList-content'>{articleList}</div>
      </div>
    </div>
  );
}

export default AnalysisList;
