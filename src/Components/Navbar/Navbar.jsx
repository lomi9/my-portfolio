import React, { useState, useRef, useEffect } from 'react';
import NavItems from "./NavItems";
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    const navbarRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { item: "Présentation", href: "/presentation" },
        { item: "Projets", href: "/projects" },
        { item: "Contact", href: "/contact" }
    ];

    const handleNavItemClick = (sectionId) => {
        scrollToSection(sectionId);
        handleCloseMenu();
    };


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCloseMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(mobileMenuRef.current, { x: 0, duration: 0.5 });
        } else {
            gsap.to(mobileMenuRef.current, { x: '-100%', duration: 0.5 });
        }
    }, [isMobileMenuOpen]);
    

    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                handleCloseMenu();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [navbarRef]);

    return (
        <nav className="navbar">

            <div className={`navbar__mobile ${isMobileMenuOpen ? 'show' : ''}`} ref={navbarRef}>
            <button className="navbar__mobile-hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className='navbar__hamburger-icon' />
            </button>
                <div className={`navbar__mobile-content ${isMobileMenuOpen ? 'show' : ''}`} ref={mobileMenuRef}>
                    {navLinks.map((link, index) => (
                        <NavItems 
                            key={index} 
                            item={link.item} 
                            href={link.href.slice(1)} 
                            onClick={() => handleNavItemClick(link.href.slice(1))}
                        />
                    ))}
                </div>
            </div>

            <div className="navbar__desktop">
                <div className="navbar__desktop-content">
                    {navLinks.map((link, index) => (
                        <NavItems 
                            key={index} 
                            item={link.item} 
                            href={link.href.slice(1)} 
                            onClick={() => {
                                scrollToSection(link.href.slice(1));
                            }}
                        />
                    ))}
                </div>
            </div>
        </nav>
    )
}
