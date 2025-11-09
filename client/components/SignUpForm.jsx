import React, { useState } from 'react';
import API from '../src/api/api';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/global.css';

function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

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
            const response = await API.post('/api/users', formData);
            setShowModal(true);
        } catch (err) {
            setError(err.response?.data?.error || 'Sign up failed');
            console.error(err);
        }
    };

    const handleModalSignIn = () => {
        setShowModal(false);
        navigate('/signin');
    };

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="card">
                    <h2>Sign Up</h2>
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

            {/* Success Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>New Account</h3>
                        <p>New account successfully created.</p>
                        <div className="modal-buttons">
                            <button onClick={handleModalSignIn} className="btn btn-primary">
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignUpForm;