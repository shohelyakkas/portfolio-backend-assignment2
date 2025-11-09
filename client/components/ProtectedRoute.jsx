import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children, role }) {
    const { isAuthenticated, isAdmin } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }

    // If route requires admin role
    if (role === 'admin' && !isAdmin()) {
        alert('Access denied. Admin only.');
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;