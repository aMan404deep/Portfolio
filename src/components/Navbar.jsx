import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-container'>
      <div className='navbar'>
        <div className='nav-heading'>
          <h3>Amandeep Singh.</h3>
        </div>
        <div className={`nav-content ${isOpen ? 'open' : ''}`}>
          <Link
            activeClass="active"
            to="project-container"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="skills-container"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="contact-container"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
        <div className='nav-hamburger' onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;