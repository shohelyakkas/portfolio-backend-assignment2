import React, { useState, useEffect } from 'react';
import API from '../src/api/api';

function AdminPanel() {
    const [activeTab, setActiveTab] = useState('contacts');
    const [contacts, setContacts] = useState([]);
    const [projects, setProjects] = useState([]);
    const [qualifications, setQualifications] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            if (activeTab === 'contacts') {
                const res = await API.get('/api/contacts');
                setContacts(res.data);
            } else if (activeTab === 'projects') {
                const res = await API.get('/api/projects');
                setProjects(res.data);
            } else if (activeTab === 'qualifications') {
                const res = await API.get('/api/qualifications');
                setQualifications(res.data);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
        }
        setLoading(false);
    };

    const handleDelete = async (id, type) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;

        try {
            await API.delete(`/api/${type}/${id}`);
            alert('Deleted successfully');
            fetchData();
        } catch (err) {
            alert('Delete failed');
            console.error(err);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Panel</h1>

            <div style={{ marginBottom: '20px' }}>
                <button
                    onClick={() => setActiveTab('contacts')}
                    style={{
                        padding: '10px 20px',
                        marginRight: '10px',
                        backgroundColor: activeTab === 'contacts' ? '#007bff' : '#ccc',
                        color: activeTab === 'contacts' ? 'white' : 'black',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Contacts
                </button>
                <button
                    onClick={() => setActiveTab('projects')}
                    style={{
                        padding: '10px 20px',
                        marginRight: '10px',
                        backgroundColor: activeTab === 'projects' ? '#007bff' : '#ccc',
                        color: activeTab === 'projects' ? 'white' : 'black',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Projects
                </button>
                <button
                    onClick={() => setActiveTab('qualifications')}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: activeTab === 'qualifications' ? '#007bff' : '#ccc',
                        color: activeTab === 'qualifications' ? 'white' : 'black',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Qualifications
                </button>
            </div>

            {loading && <p>Loading...</p>}

            {/* Contacts Table */}
            {activeTab === 'contacts' && (
                <div>
                    <h2>Contact Messages</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Message</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact._id}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{contact.name}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{contact.email}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{contact.message}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                        <button
                                            onClick={() => handleDelete(contact._id, 'contacts')}
                                            style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none' }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Projects Table */}
            {activeTab === 'projects' && (
                <div>
                    <h2>Projects</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Technologies</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project._id}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.title}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.description}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                        {project.technologies?.join(', ')}
                                    </td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                        <button
                                            onClick={() => handleDelete(project._id, 'projects')}
                                            style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none' }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Qualifications Table */}
            {activeTab === 'qualifications' && (
                <div>
                    <h2>Education/Qualifications</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Institution</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Degree</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Field of Study</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {qualifications.map(qual => (
                                <tr key={qual._id}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{qual.institution}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{qual.degree}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{qual.fieldOfStudy}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                        <button
                                            onClick={() => handleDelete(qual._id, 'qualifications')}
                                            style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none' }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;