import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Inventory Management System',
      description: 'An inventory management system in which the user can handle create category, suppliers and products. The project is built with SvelteKit, Drizzle and uses the latest Better Auth library for authentication.',
      image: '📦',
      tags: ['In Progress', 'SvelteKit', 'Drizzle', 'TailwindCSS', 'ShadCN'],
      link: '#'
    },
    {
      id: 2,
      title: 'FlickTodo',
      description: 'A full-stack web application for managing tasks. The project is built with Spring Boot and Supabase Auth and setup CI/CD with Github Actions.',
      image: '✅',
      tags: ['Spring Boot', 'Supabase', 'NextJS', 'JWT', 'Docker', 'ChakraUI'],
      link: '#'
    },
    {
      id: 3,
      title: 'Forecast Inventory Predictor',
      description: 'A React web app that uses TensorFlow.js to predict which products need to be reordered based on current inventory, average sales per week, and lead time.',
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
