import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => (
  <section className="p-10">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="flex flex-col gap-4">
      <Link to="/projects/project1" className="text-blue-500 underline">Project 1</Link>
      <Link to="/projects/project2" className="text-blue-500 underline">Project 2</Link>
    </div>
  </section>
);

export default ProjectsSection;
