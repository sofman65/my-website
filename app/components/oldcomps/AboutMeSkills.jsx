// AboutMe.js
import React from 'react';


const skillLevels = {
  Python: 90,
  Postgresql: 75,
  Node: 60,
  React: 50,
  Git: 80,
  Tensorflow: 75,
  Pytorch: 50,
  Pandas: 90,
  Numpy: 85,
  Matplotlib: 86,
  Docker: 60,
};

const AboutMeSkills = () => {
  return (
    <div className="AboutMeSkills">
      <h3>Technical Skills</h3>
      <ul className="SkillsList">
        {Object.entries(skillLevels).map(([skill, level]) => (
          <li key={skill}>
            <img
              src={`${skill}.png`} // Assuming you have an image with the name of the skill
              alt={`${skill.charAt(0).toUpperCase() + skill.slice(1)} Logo`} // Capitalize the first letter of the skill for the alt text
              className="SkillLogo"
            />
            <span>{skill.charAt(0).toUpperCase() + skill.slice(1)}</span> {/* Capitalize the first letter */}
            <div className="SkillProgress">
              <div
                className="SkillProgressInner"
                style={{ '--skill-level': `${level}%` }} // Inline style for width
              />
            </div>
          </li>
        ))}
      </ul>
      <h3>Soft Skills</h3>
      <div className="SoftSkillsSection">
        <h3>Business Analysis & Project Management</h3>
        <p className="SoftSkill">
          <strong>Requirements Elicitation & Stakeholder Communication:</strong> Expertise in gathering key business requirements and translating them into actionable insights. Skilled in facilitating effective communication between stakeholders and technical teams to align project objectives and deliverables.
        </p>
        <p className="SoftSkill">
          <strong>Business Requirement Documentation:</strong> Proficient in drafting comprehensive business requirement documents (BRDs), ensuring clear and concise articulation of business needs and proposed solutions.
        </p>
        <p className="SoftSkill">
          <strong>Kanban & Agile Methodologies:</strong> Experienced in Agile and Kanban project management methodologies, utilizing tools like Trello for efficient project tracking, workflow management, and team collaboration.
        </p>
      </div>


    </div>
  );
}


export default AboutMeSkills;
