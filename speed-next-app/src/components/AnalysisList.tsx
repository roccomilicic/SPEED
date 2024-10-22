'use client';
import React, { useState, useEffect } from 'react';
import { Article } from './Article';
import './AnalysisList.css'; 

function AnalysisList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [editedArticle, setEditedArticle] = useState<Article | null>(null);

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

  const analysisArticles = articles.filter(article => article.status === 'Approved');

  if (loading) {
    return <div className="AnalysisList-loading">Loading articles...</div>;
  }

  if (error) {
    return <div className="AnalysisList-error">{error}</div>;
  }

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
