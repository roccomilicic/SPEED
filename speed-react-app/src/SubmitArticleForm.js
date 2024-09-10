import React, { useState } from 'react';

const SubmitArticleForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    journal: '',
    year: '',
    doi: '',
    abstract: '',
    keywords: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <input type="text" name="authors" placeholder="Authors" onChange={handleChange} />
      {/* Add other fields similarly */}
      <button type="submit">Submit Article</button>
    </form>
  );
};

export default SubmitArticleForm;
