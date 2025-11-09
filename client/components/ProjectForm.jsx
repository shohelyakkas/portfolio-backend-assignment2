import React, { useState, useContext } from 'react';
import API from '../src/api/api';
import { AuthContext } from '../context/AuthContext';

function ProjectForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: '',
        link: '',
        startDate: '',
        endDate: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { isAdmin } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isAdmin()) {
            setError('Only admins can add projects');
            return;
        }

        setError('');
        setSuccess('');

        try {
            // Convert technologies string to array
            const projectData = {
                ...formData,
                technologies: formData.technologies.split(',').map(tech => tech.trim())
            };

            await API.post('/api/projects', projectData);
            setSuccess('Project added successfully!');
            setFormData({
                title: '',
                description: '',
                technologies: '',
                link: '',
                startDate: '',
                endDate: ''
            });
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to add project');
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
            <h2>Add Project</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Project Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Project name"
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Project description"
                        required
                        rows="4"
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Technologies (comma-separated):</label>
                    <input
                        type="text"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleChange}
                        placeholder="React, Node.js, MongoDB"
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Project Link (optional):</label>
                    <input
                        type="url"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        placeholder="https://github.com/..."
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>End Date (optional):</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Add Project
                </button>
            </form>
        </div>
    );
}

export default ProjectForm;