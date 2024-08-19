import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" /> {/* img etiketi kendiliğinden kapanıyor */}
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#top">Home</a>
                    <a href="#our-classes">Our Classes</a>
                    <a href="#our-best-trainers">Our Best Trainers</a>
                    <a href="#review-client">Review Client</a>
                    <a href="#contact-us">Contact Us</a>
                    <button className="nav-btn">Join Us</button>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    );
}; // Kapanış parantezi eksikti, eklendi.

export default Navbar;

