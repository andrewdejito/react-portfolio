import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  const projects = [
  {
  id: 1,
  title: 'E-Commerce Website',
  description: 'A full-featured e-commerce platform built using Laravel for the backend and React for the frontend. Includes product browsing, cart management, checkout flow, and user authentication.',
  image: '🛒',
  tags: ['Laravel', 'React', 'E-Commerce', 'Full-Stack'],
  link: '#'
},
{
  id: 2,
  title: 'Encryption & Decryption Tool',
  description: 'A web-based encryption and decryption tool built with JavaScript, HTML, and CSS. Allows users to securely encode and decode messages using customizable ciphers.',
  image: '🔐',
  tags: ['JavaScript', 'HTML', 'CSS', 'Security', 'Encryption'],
  link: 'https://encryption-and-decryption-xi.vercel.app/'
},
{
  id: 3,
  title: 'Forecast Inventory Predictor',
  description: 'A React web app that uses TensorFlow.js to predict which products need to be reordered based on current inventory, average weekly sales, and supplier lead time.',
  image: '📊',
  tags: ['React', 'TensorFlow.js', 'Machine Learning', 'JavaScript'],
  link: '#'
}

  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="page-title">Featured Projects</h1>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
