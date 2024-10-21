  import React, { useState, useEffect } from 'react';
  import ArticleCard from './ArticleCard'; 
  import { Article } from './Article'; 

  function ShowArticleList() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term
    const [needsAnalysis, setNeedsAnalysis] = useState<boolean>(false);

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
          setFilteredArticles(articles); // Set both articles and filtered articles

          // Check if any article with "Approved" status has claim or evidence as 'not given'
          const hasArticlesNeedingAnalysis = articles.some(
            (article: Article) =>
              article.status === 'Approved' &&
              (article.claim === 'not given' || article.evidence === 'not given')
          );
          setNeedsAnalysis(hasArticlesNeedingAnalysis); // Set the state if any approved article needs analysis
        })
        .catch((err) => {
          console.log('Error from ShowArticleList: ' + err);
        });
    }, []);

    useEffect(() => {
      // Filter articles based on the search term
      const filtered = articles.filter((article) => {
        const searchIn = `${article.title ?? ''} ${article.SEPractice ?? ''} ${article.doi ?? ''} ${article.summary ?? ''} ${article.year_of_publication ?? ''} ${article.source ?? ''} ${article.authors ?? ''} ${article.claim ?? ''} ${article.evidence ?? ''}`.toLowerCase();
        return searchIn.includes(searchTerm.toLowerCase());
      });    
      setFilteredArticles(filtered);
    }, [searchTerm, articles]);

    const hasPendingArticles = articles.some((article) => article.status === 'Pending');
    const approvedArticles = filteredArticles.filter((article) => article.status === 'Approved');

    const articleList =
      approvedArticles.length === 0
        ? 'No articles match your search.'
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
              {/* Search Bar */}
              <input
                type="text"
                className="form-control"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Notification banner for pending articles */}
          {hasPendingArticles && (
            <div className="alert alert-warning text-center" role="alert">
              There are articles in the moderation queue that need to be reviewed!
            </div>
          )}

          {/* Notification for approved articles that need analysis */}
          {needsAnalysis && (
            <div className="alert alert-warning text-center" role="alert">
              There are Approved Articles that need Analysis
            </div>
          )}

          <div className="list">{articleList}</div>
        </div>
      </div>
    );
  }

  export default ShowArticleList;
