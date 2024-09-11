import React, { useState } from 'react';
import './styles.css';

const SubmitArticleForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        authors: '',
        source: '',
        year: '',
        doi: '',
        summary: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/articles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log(result.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Submit a new Article</h3>
            <div className="form-container">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Title" onChange={handleChange} />
                <label htmlFor="authors">Authors:</label>
                <input type="text" id="authors" name="authors" placeholder="Authors" onChange={handleChange} />
                <label htmlFor="source">Source:</label>
                <input type="text" id="source" name="source" placeholder="Source" onChange={handleChange} />
                <label htmlFor="year">Publication Year:</label>
                <input type="text" id="year" name="year" placeholder="YYYY" onChange={handleChange} />
                <label htmlFor="doi">DOL:</label>
                <input type="text" id="doi" name="doi" placeholder="DOI" onChange={handleChange} />
                <label htmlFor="summary">Summary:</label>
                <textarea id="summary" name="summary" rows="5" onChange={handleChange} />
                <button type="submit">Submit Article</button>
            </div>
        </form>
    );
};

export default SubmitArticleForm;