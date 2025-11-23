import React from 'react';
import './SkillCard.css';

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img
        src={skill.logo}
        alt={skill.name}
        className="skill-icon"
      />
      <div className="skill-name">{skill.name}</div>
    </div>
  );
}
