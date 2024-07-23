import React from 'react';
import ProjectImage from '../common/ProjectImage';
import projectImage1 from '../../assets/images/projectImage1.png';

const ProjectPage = ({ project }) => (
  <div className="p-10">
    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
    <ProjectImage src={projectImage1} alt={project.title} />
    <p className="text-lg mt-4">{project.description}</p>
    <h2 className="text-2xl font-bold mt-4">Features</h2>
    <ul className="list-disc list-inside mt-2">
      {project.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <h2 className="text-2xl font-bold mt-4">Technologies Used</h2>
    <p className="mt-2">{project.technologies}</p>
    <h2 className="text-2xl font-bold mt-4">Role & Responsibilities</h2>
    <p className="mt-2">{project.role}</p>
    <h2 className="text-2xl font-bold mt-4">Challenges & Solutions</h2>
    <p className="mt-2">{project.challenges}</p>
    <h2 className="text-2xl font-bold mt-4">Project Outcomes</h2>
    <p className="mt-2">{project.outcomes}</p>
  </div>
);

export default ProjectPage;
