import React, { useState, useContext } from 'react';
import API from '../src/api/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navigation from './Navigation';
import '../styles/global.css';

function SignInForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await API.post('/auth/signin', formData);
            const { token, user } = response.data;

            // Use context login function
            login(user, token);

            // Redirect to profile page
            navigate('/profile');
        } catch (err) {
            setError(err.response?.data?.error || 'Sign in failed');
            console.error(err);
        }
    };

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="card">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <div className="btn-container">
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

export default SignInForm;