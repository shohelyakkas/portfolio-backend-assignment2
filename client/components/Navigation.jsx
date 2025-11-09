import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Navigation.css';

function Navigation() {
    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const location = useLocation();

    const handleSignOut = () => {
        logout();
        window.location.href = '/';
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="main-navigation">
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to="/" className="brand-link">
                        <span className="brand-icon">🏠</span>
                        <span className="brand-text">MERN Skeleton</span>
                    </Link>
                </div>

                <div className="nav-links">
                    {!isAuthenticated ? (
                        <>
                            <Link to="/users" className={isActive('/users')}>
                                USERS
                            </Link>
                            <Link to="/signup" className={isActive('/signup')}>
                                SIGN UP
                            </Link>
                            <Link to="/signin" className={isActive('/signin')}>
                                SIGN IN
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/users" className={isActive('/users')}>
                                USERS
                            </Link>
                            <Link to="/profile" className={isActive('/profile')}>
                                MY PROFILE
                            </Link>
                            <button onClick={handleSignOut} className="signout-btn">
                                SIGN OUT
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
