import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav justify-content-end navbar-light bg-light">
            <li className = "nav-item">
            <Link to = '/' className = "nav-link text-secondary">Carb<strong>Trak</strong></Link>
            </li>
            <li className = "nav-item">
            <Link to = '/about' className = "nav-link">About</Link>
            </li>
        </nav>
    )
}

export default Navbar
