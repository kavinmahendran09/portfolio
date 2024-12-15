import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarScrolled, setNavbarScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 100); // Adjust threshold for scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={classNames('navbar navbar-expand-lg navbar-dark', {
        'navbar-scrolled': isNavbarScrolled, // Apply styles when scrolled
      })}
      style={{
        backgroundColor: 'rgba(15, 18, 23, 0.7)', // Slightly transparent background
        backdropFilter: 'blur(10px)', // Frosted glass effect
        borderRadius: '40px',
        padding: '10px 30px', // Added padding to the left and right of the contents
        boxShadow: isNavbarScrolled ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none', // Add shadow when scrolled
        position: 'fixed', // Make navbar fixed at the top
        top: '20px', // Add space at the top (this ensures it's not touching the top of the viewport)
        left: '20px', // Add space to the left side
        right: '20px', // Add space to the right side
        zIndex: 1000,
        border: '2px solid #ffffff', // White border
        width: 'calc(100% - 40px)', // Ensures the navbar width is adjusted based on left and right padding
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease', // Smooth transition for background and shadow
      }}
    >
      {/* Brand Name */}
      <Link
        className="navbar-brand"
        to="/"
        style={{
          fontSize: '1.5rem',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
        aria-label="Home"
      >
        Kavin
      </Link>

      {/* Hamburger Menu for mobile view */}
      <button
        onClick={toggleMobileMenu}
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle navigation"
        style={{
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links */}
      <div
        className={classNames('collapse navbar-collapse', {
          show: isMobileMenuOpen,
        })}
        id="navbarNav"
      >
        <ul
          className={classNames('navbar-nav ml-auto', {
            'flex-column': isMobileMenuOpen,
            'flex-lg-row': !isMobileMenuOpen,
          })}
          style={{
            justifyContent: isMobileMenuOpen ? 'center' : 'flex-end',
            width: '100%',
          }}
        >
          <li className="nav-item">
            <a
              className="nav-link"
              href="#about"
              style={{
                fontSize: '1.2rem',
                fontWeight: 500,
              }}
              aria-label="About Section"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#projects"
              style={{
                fontSize: '1.2rem',
                fontWeight: 500,
              }}
              aria-label="Projects Section"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              style={{
                fontSize: '1.2rem',
                fontWeight: 500,
              }}
              aria-label="Contact Section"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
