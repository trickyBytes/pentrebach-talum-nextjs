'use client';
import { useState } from 'react';

const navLinks = [
    { label: 'About Us',   href: '/about'   },
    { label: 'Faq',        href: '/faq'     },
    { label: 'Blog',       href: '/blog'    },
    { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="header__inner">
                <a href="/" className="header__logo">
                    <img src="/img/66a8c7937c866a2d20f76479_nav_logo.png" width={96} alt="Pentrebach Cottages" />
                </a>
                <nav className="header__nav">
                    {navLinks.map(({ label, href }) => (
                        <a key={href} href={href} className="header__navlink">
                            <span>{label}</span>
                            <span className="header__underline" />
                        </a>
                    ))}
                </nav>
                <a href="/book" className="header__book-btn">Book Now!</a>
                <button
                    className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            {menuOpen && (
                <div className="header__mobile-menu">
                    {navLinks.map(({ label, href }) => (
                        <a key={href} href={href} className="header__mobile-link" onClick={closeMenu}>
                            {label}
                        </a>
                    ))}
                    <a href="/book" className="header__mobile-book" onClick={closeMenu}>Book Now!</a>
                </div>
            )}
        </header>
    );
}
