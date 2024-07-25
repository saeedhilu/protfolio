import React from "react";
import { FaJs, FaReact, FaCss3Alt, FaPython, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql } from "react-icons/si";
import Animation from "../animations/skills/App"; // Adjust path as necessary



const Skills = () => {
  return (
    <div className="skills-section p-4  min-h-screen">
      <div className="p-10 ml-32 mb-8">
        <h1 className="text-2xl font-bold mb-4  text-white">Skills</h1>
      </div>
      <div >
       
        <Animation />
      </div>
    </div>
  );
};

export default Skills;
