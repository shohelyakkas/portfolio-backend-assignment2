import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../src/api/api';
import Navigation from './Navigation';
import '../styles/global.css';

function EditProfile({ onCancel }) {
    const { user, login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Only send password if it's been changed
            const updateData = {
                name: formData.name,
                email: formData.email
            };

            if (formData.password) {
                updateData.password = formData.password;
            }

            const response = await API.put(`/api/users/${user._id}`, updateData);

            // Update the user in context
            const token = localStorage.getItem('token');
            login(response.data, token);

            setSuccess('Profile updated successfully!');
            setTimeout(() => {
                onCancel();
            }, 1500);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to update profile');
            console.error(err);
        }
    };

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="card">
                    <h2 style={{ color: '#ff4081' }}>Edit Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Leave blank to keep current password"
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">{success}</div>}

                        <div className="btn-container" style={{ gap: '15px' }}>
                            <button
                                type="button"
                                onClick={onCancel}
                                className="btn btn-secondary"
                            >
                                CANCEL
                            </button>
                            <button type="submit" className="btn btn-primary">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
