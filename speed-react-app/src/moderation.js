import React, { useState, useEffect } from 'react';

function Moderation() {
  const [reports, setReports] = useState([
    { id: 1, title: "Article 1", description: "This is the first article.", status: "Pending" },
    { id: 2, title: "Article 2", description: "This is the second article.", status: "Pending" },
    { id: 3, title: "Article 3", description: "This is the third article.", status: "Pending" },
  ]);

  // Fetch reports when the component is mounted
  useEffect(() => {
    fetchReports();
  }, []);

  async function fetchReports() {
    // Here, you can simulate fetching data if needed.
    // For now, we will use the fake data already set in the state.
    // In a real application, you'd replace this with an API call.
  }

  async function handleModeration(articleId, action) {
    try {
      const response = await fetch(`/api/moderation/reports/${articleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }), // Action could be 'approve' or 'reject'
      });
      
      if (response.ok) {
        // Refresh reports after moderation action
        fetchReports();
      } else {
        console.error("Failed to update report:", response.statusText);
      }
    } catch (error) {
      console.error("Error moderating report:", error);
    }
  }

  return (
    <div>
      <h1>Moderation Panel</h1>
      <button onClick={fetchReports}>Refresh Reports</button>
      {reports.length === 0 ? (
        <p>No articles pending moderation.</p>
      ) : (
        <ul>
          {reports.map(report => (
            <li key={report.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <p>Status: {report.status}</p>
              <div>
                <button onClick={() => handleModeration(report.id, 'approve')}>Approve</button>
                <button onClick={() => handleModeration(report.id, 'reject')}>Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Moderation;
