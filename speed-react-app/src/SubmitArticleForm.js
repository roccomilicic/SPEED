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

    const [errors, setErrors] = useState({
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

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Check for required fields
        if (!formData.title) {
            newErrors.title = 'Title is required';
            isValid = false;
        }
        if (!formData.authors) {
            newErrors.authors = 'Authors are required';
            isValid = false;
        }
        if (!formData.source) {
            newErrors.source = 'Source is required';
            isValid = false;
        }
        if (!formData.year) {
            newErrors.year = 'Publication Year is required';
            isValid = false;
        }
        if (!formData.doi) {
            newErrors.doi = 'DOI is required';
            isValid = false;
        }
        if (!formData.summary) {
            newErrors.summary = 'Summary is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!validateForm()) {
            return; // Do not submit if validation fails
        }

        try {
            const response = await fetch('http://localhost:3000/articles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Handle server errors
                throw new Error('Failed to submit article');
            }

            const result = await response.json();
            console.log(result.message);
            // Optionally, clear the form or redirect user
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Submit a new Article</h3>
            <div className="form-container">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                {errors.title && <p className="error">{errors.title}</p>}
                
                <label htmlFor="authors">Authors:</label>
                <input
                    type="text"
                    id="authors"
                    name="authors"
                    placeholder="Authors"
                    value={formData.authors}
                    onChange={handleChange}
                />
                {errors.authors && <p className="error">{errors.authors}</p>}
                
                <label htmlFor="source">Source:</label>
                <input
                    type="text"
                    id="source"
                    name="source"
                    placeholder="Source"
                    value={formData.source}
                    onChange={handleChange}
                />
                {errors.source && <p className="error">{errors.source}</p>}
                
                <label htmlFor="year">Publication Year:</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="YYYY"
                    value={formData.year}
                    onChange={handleChange}
                />
                {errors.year && <p className="error">{errors.year}</p>}
                
                <label htmlFor="doi">DOI:</label>
                <input
                    type="text"
                    id="doi"
                    name="doi"
                    placeholder="DOI"
                    value={formData.doi}
                    onChange={handleChange}
                />
                {errors.doi && <p className="error">{errors.doi}</p>}
                
                <label htmlFor="summary">Summary:</label>
                <textarea
                    id="summary"
                    name="summary"
                    rows="5"
                    value={formData.summary}
                    onChange={handleChange}
                />
                {errors.summary && <p className="error">{errors.summary}</p>}
                
                <button type="submit">Submit Article</button>
            </div>
        </form>
    );
};

export default SubmitArticleForm;
