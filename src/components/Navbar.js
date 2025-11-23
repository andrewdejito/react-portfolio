import React from 'react';
import './Navbar.css';

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button 
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </button>
        <button 
          className={currentPage === 'skills' ? 'active' : ''}
          onClick={() => setCurrentPage('skills')}
        >
          Skills
        </button>
        <button 
          className={currentPage === 'projects' ? 'active' : ''}
          onClick={() => setCurrentPage('projects')}
        >
          Projects
        </button>
      </div>
    </nav>
  );
}
