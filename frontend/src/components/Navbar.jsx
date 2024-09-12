import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <span className="logo-text">YummyYield.</span>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='header' smooth={true} offset={-70} duration={500}>Home</Link></li>
                    <li><Link to='menu' smooth={true} offset={-70} duration={500}>Menu</Link></li>
                    <li><Link to='food-card' smooth={true} offset={-70} duration={500}>Items</Link></li>
                    <li><Link to='about' smooth={true} offset={-70} duration={500}>About</Link></li>
                    <li><Link to='contact' smooth={true} offset={-70} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
