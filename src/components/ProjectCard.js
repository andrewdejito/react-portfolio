import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-image">
          <span className="project-emoji">{project.image}</span>
        </div>
        <div className="project-details">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <a href={project.link} className="view-project-btn">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}