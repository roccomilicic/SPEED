import React, { useState, useEffect } from 'react';

function Moderation() {
  const [reports, setReports] = useState([]);

  // Fetch reports when the component is mounted
  useEffect(() => {
    fetchReports();
  }, []);

  async function fetchReports() {
    try {
      const response = await fetch('/api/moderation/reports');
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  }

  return (
    <div>
      <h1>Moderation Panel</h1>
      <button onClick={fetchReports}>Refresh Reports</button>
      <ul>
        {reports.map(report => (
          <li key={report.id}>{report.report}</li>
        ))}
      </ul>
    </div>
  );
}

export default Moderation;
