import React from 'react';
import './navbar.css'; // Link your CSS file here

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>MyApp</h2>
            </div>
            <div className="navbar-actions">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
