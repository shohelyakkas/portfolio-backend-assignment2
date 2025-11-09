import React, { useEffect, useState } from 'react';
import API from '../src/api/api';
import EducationForm from './EducationForm';

function ListQualifications() {
    const [qualifications, setQualifications] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user?.role === 'admin';

    useEffect(() => {
        fetchQualifications();
    }, []);

    const fetchQualifications = async () => {
        try {
            const res = await API.get('/api/qualifications');
            setQualifications(res.data);
        } catch (err) {
            setError('Failed to load qualifications.');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this entry?')) return;
        try {
            await API.delete(`/api/qualifications/${id}`);
            setQualifications(qualifications.filter((q) => q._id !== id));
        } catch (err) {
            alert('Delete failed.');
            console.error(err);
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const handleSave = () => {
        setEditingItem(null);
        fetchQualifications();
    };

    return (
        <div>
            <h2>Education / Qualification List</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {editingItem ? (
                <EducationForm
                    initialData={editingItem}
                    onSuccess={handleSave}
                    submitLabel="Update"
                />
            ) : (
                <ul>
                    {qualifications.map((q) => (
                        <li key={q._id} style={{ marginBottom: '1rem' }}>
                            <strong>{q.title}</strong> <br />
                            {q.firstname} {q.lastname} <br />
                            {q.email && <span>Email: {q.email} <br /></span>}
                            <small>Completed: {new Date(q.completion).toLocaleDateString()}</small> <br />
                            {q.description && <p>{q.description}</p>}
                            {isAdmin && (
                                <>
                                    <button onClick={() => handleEdit(q)}>Edit</button>
                                    <button onClick={() => handleDelete(q._id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListQualifications;
