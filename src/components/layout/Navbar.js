import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav  navbar-light bg-info justify-content-between">
            <li className = "nav-item">
            <Link to = '/' className = " nav-link text-dark">Carb<strong>Trak</strong></Link>
            </li>
            <li className = "">
            <Link to = '/about' className = "nav-link text-dark">About</Link>
            </li>
        </nav>
    )
}

export default Navbar
