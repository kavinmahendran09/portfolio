import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarScrolled, setNavbarScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(''); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'about' ? 100 : 60; 
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };


  const handleScroll = () => {
    const sections = ['about', 'projects', 'contact'];
    const heroSection = document.getElementById('heroSection');
    const scrollPosition = window.scrollY;

    // If HeroSection is in view, do not set 'About' as active
    if (heroSection && heroSection.getBoundingClientRect().top > 0) {
      setActiveSection('');
    } else {
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && section.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActiveSection(sections[i]);
        }
      }
    }

    
    if (scrollPosition < 50) {
      setActiveSection('');
    }

    setNavbarScrolled(scrollPosition > 100); 
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <nav
      className={classNames('navbar navbar-expand-lg navbar-dark', {
        'navbar-scrolled': isNavbarScrolled,
      })}
      style={{
        backgroundColor: 'rgba(15, 18, 23, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '40px',
        padding: '10px 30px',
        boxShadow: isNavbarScrolled ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none',
        position: 'fixed',
        top: '20px',
        left: '20px',
        right: '20px',
        zIndex: 1000,
        border: '2px solid #ffffff',
        width: 'calc(100% - 40px)',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
      }}
    >
      <Link
        className="navbar-brand"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        style={{
          fontSize: '1.5rem',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
        aria-label="Home"
      >
        Kavin
      </Link>

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
              className={classNames('nav-link', { active: activeSection === 'about' })}
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
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
              className={classNames('nav-link', { active: activeSection === 'projects' })}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
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
              className={classNames('nav-link', { active: activeSection === 'contact' })}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
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
