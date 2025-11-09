import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../src/api/api';
import Navigation from './Navigation';
import '../styles/global.css';
import '../styles/Users.css';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await API.get('/api/users');
            setUsers(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to load users');
            setLoading(false);
            console.error(err);
        }
    };

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="card card-wide">
                    <h2>All Users</h2>
                    {loading && <p>Loading...</p>}
                    {error && <div className="error-message">{error}</div>}

                    {!loading && !error && (
                        <div className="users-list">
                            {users.map((user) => (
                                <Link
                                    to={`/user/${user._id}`}
                                    key={user._id}
                                    className="user-item"
                                >
                                    <div className="user-info">
                                        <div className="user-avatar">
                                            👤
                                        </div>
                                        <span className="user-name">{user.name}</span>
                                    </div>
                                    <div className="arrow-icon">→</div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Users;
