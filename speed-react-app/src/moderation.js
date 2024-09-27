import React, { useState, useEffect } from 'react';
import './styles.css'; // 

function Moderation() {
  const [reports, setReports] = useState([
    { id: 1, title: "Article 1", description: "This is the first article.", status: "Pending" },
    { id: 2, title: "Article 2", description: "This is the second article.", status: "Pending" },
    { id: 3, title: "Article 3", description: "This is the third article.", status: "Pending" },
  ]);

  useEffect(() => {
    fetchReports();
  }, []);

  async function fetchReports() {
    // Simulate fetching data
  }

  async function handleModeration(articleId, action) {
    // Handle moderation actions
  }

  return (
    <div className="moderation-panel">
      <h1>Moderation Panel</h1>
      <button onClick={fetchReports}>Refresh Reports</button>
      {reports.length === 0 ? (
        <p className="no-reports">No articles pending moderation.</p>
      ) : (
        <ul>
          {reports.map(report => (
            <li key={report.id} className="report-item">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <p>Status: {report.status}</p>
              <div>
                <button id={`approve-${report.id}`} onClick={() => handleModeration(report.id, 'approve')}>Approve</button>
                <button id={`reject-${report.id}`} onClick={() => handleModeration(report.id, 'reject')}>Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Moderation;
