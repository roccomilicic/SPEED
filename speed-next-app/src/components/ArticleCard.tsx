import React from 'react';
import { Article } from './Article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text"><strong>Authors:</strong> {article.authors}</p>
        <p className="card-text"><strong>Source:</strong> {article.source}</p>
        <p className="card-text"><strong>Year:</strong> {article.year_of_publication}</p>
        <p className="card-text"><strong>DOI:</strong> {article.doi}</p>
        <p className="card-text"><strong>Summary:</strong> {article.summary}</p>
        <p className="card-text"><strong>Status:</strong> {article.status}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
