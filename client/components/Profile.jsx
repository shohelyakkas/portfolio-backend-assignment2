import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import API from '../src/api/api';
import Navigation from './Navigation';
import EditProfile from './EditProfile';
import '../styles/global.css';
import '../styles/Profile.css';

function Profile() {
    const { user, logout } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    if (!user) {
        navigate('/signin');
        return null;
    }

    const handleDelete = async () => {
        try {
            await API.delete(`/api/users/${user._id}`);
            logout();
            navigate('/');
        } catch (err) {
            alert('Failed to delete account');
            console.error(err);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    };

    if (isEditing) {
        return <EditProfile onCancel={() => setIsEditing(false)} />;
    }

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="card">
                    <h2 className="profile-title">Profile</h2>

                    <div className="profile-content">
                        <div className="profile-header">
                            <div className="user-avatar-large">
                                👤
                            </div>
                            <div className="profile-info">
                                <h3>{user.name}</h3>
                                <p className="user-email">{user.email}</p>
                            </div>
                            <div className="profile-actions">
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="icon-btn edit-btn"
                                    title="Edit Profile"
                                >
                                    ✏️
                                </button>
                                <button
                                    onClick={() => setShowDeleteModal(true)}
                                    className="icon-btn delete-btn"
                                    title="Delete Account"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>

                        <div className="profile-detail">
                            <p className="joined-text">
                                Joined: {formatDate(user.created || new Date())}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Delete Account</h3>
                        <p>Confirm to delete your account.</p>
                        <div className="modal-buttons">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="btn btn-secondary"
                            >
                                CANCEL
                            </button>
                            <button
                                onClick={handleDelete}
                                className="btn btn-danger"
                            >
                                CONFIRM
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
