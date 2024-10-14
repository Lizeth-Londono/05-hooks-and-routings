import React, { useState } from 'react'; // Se importan los useState
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Se cambio Redirect por Navigate
import NavComponent from './NavComponent';
import Home from './Home';
import Profile from './Profile';
import Dashboard from './Dashboard';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <NavComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
