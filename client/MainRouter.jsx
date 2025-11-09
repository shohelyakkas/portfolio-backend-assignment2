import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import EducationForm from './components/EducationForm';
import ProjectForm from './components/ProjectForm';
import ContactForm from './components/ContactForm';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';
import UserView from './components/UserView';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './components/Users';
import Profile from './components/Profile';

function MainRouter() {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/users" element={<Users />} />
                <Route path="/portfolio" element={<UserView />} />

                {/* Protected routes for authenticated users */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/education"
                    element={
                        <ProtectedRoute>
                            <EducationForm />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/project"
                    element={
                        <ProtectedRoute>
                            <ProjectForm />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <ProtectedRoute>
                            <ContactForm />
                        </ProtectedRoute>
                    }
                />

                {/* Admin-only route */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute role="admin">
                            <AdminPanel />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default MainRouter;
