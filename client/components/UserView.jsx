import React, { useState, useEffect } from 'react';
import API from '../src/api/api';

function UserView() {
    const [projects, setProjects] = useState([]);
    const [qualifications, setQualifications] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const projectsRes = await API.get('/api/projects');
            const qualsRes = await API.get('/api/qualifications');
            setProjects(projectsRes.data);
            setQualifications(qualsRes.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Portfolio</h1>

            <section style={{ marginBottom: '40px' }}>
                <h2>Education</h2>
                {qualifications.map(qual => (
                    <div key={qual._id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                        <h3>{qual.degree} - {qual.fieldOfStudy}</h3>
                        <p><strong>{qual.institution}</strong></p>
                        <p>{qual.startDate} - {qual.endDate || 'Present'}</p>
                        <p>{qual.description}</p>
                    </div>
                ))}
            </section>

            <section>
                <h2>Projects</h2>
                {projects.map(project => (
                    <div key={project._id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies?.join(', ')}</p>
                        {project.link && (
                            <p><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></p>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default UserView;