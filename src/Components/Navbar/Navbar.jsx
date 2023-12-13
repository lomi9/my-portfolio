import React, { useState } from 'react';
import NavItems from "./NavItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const navLinks = [
        { item: "Présentation", href: "/presentation" },
        { item: "Projets", href: "/projects" },
        { item: "Contact", href: "/contact" }
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">

            <button className="navbar__hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className='navbar__hamburger-icon' />
</button>

            <div className={`navbar__menu ${isMobileMenuOpen ? "navbar__menu-open" : ""}`}>
                <div className="navbar__menu-content">
                    {navLinks.map((link, index) => (
                        <NavItems key={index} item={link.item} href={link.href.slice(1)} onClick={scrollToSection}/>
                    ))}
                </div>
            </div>
        </nav>
    )
}