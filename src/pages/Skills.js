import React from 'react';
import SkillCard from '../components/SkillCard';
import './Skills.css';

export default function Skills() {
  const skills = {
    backend: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#336791'},
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    ],
    frontend: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
    deployment: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
    ux: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },

    ]
  };

  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1 className="page-title">My Skills</h1>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h2 className="category-title">
              <span className="icon">💻</span> Backend
            </h2>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2 className="category-title">
              <span className="icon">🎨</span> Frontend
            </h2>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2 className="category-title">
              <span className="icon">☁️</span> Deployment
            </h2>
            <div className="skills-list">
              {skills.deployment.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2 className="category-title">
              <span className="icon">👥</span> User Experience
            </h2>
            <div className="skills-list">
              {skills.ux.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
