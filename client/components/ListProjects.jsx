import React, { useEffect, useState } from 'react';
import API from '../src/api/api';
import ProjectForm from './ProjectForm';

function ListProjects() {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user?.role === 'admin';

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await API.get('/api/projects');
            setProjects(res.data);
        } catch (err) {
            setError('Failed to load projects.');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;
        try {
            await API.delete(`/api/projects/${id}`);
            setProjects(projects.filter((p) => p._id !== id));
        } catch (err) {
            alert('Delete failed.');
            console.error(err);
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
    };

    const handleSave = (updatedProject) => {
        setEditingProject(null);
        fetchProjects(); // refresh list
    };

    return (
        <div>
            <h2>Project List</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {editingProject ? (
                <ProjectForm
                    initialData={editingProject}
                    onSuccess={handleSave}
                    submitLabel="Update"
                />
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project._id} style={{ marginBottom: '1rem' }}>
                            <strong>{project.title}</strong> <br />
                            {project.description} <br />
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            )}
                            <br />
                            <small>Technologies: {project.technologies}</small>
                            <br />
                            <small>Completed: {new Date(project.completion).toLocaleDateString()}</small>
                            <br />
                            {isAdmin && (
                                <>
                                    <button onClick={() => handleEdit(project)}>Edit</button>
                                    <button onClick={() => handleDelete(project._id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListProjects;
