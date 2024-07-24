// import React from "react";
// import { FaJs, FaReact, FaCss3Alt, FaPython, FaNodeJs, FaGitAlt, FaHtml5 } from 'react-icons/fa';
// import { SiTailwindcss, SiPostgresql } from 'react-icons/si';
// import myVideo from '../assets/video1.mp4'; // Adjust the path as necessary

// const skillsList = [
//   { name: "JavaScript", icon: <FaJs size={24} /> },
//   { name: "React", icon: <FaReact size={24} /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
//   { name: "Node.js", icon: <FaNodeJs size={24} /> },
//   { name: "Python", icon: <FaPython size={24} /> },
//   { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
//   { name: "Git", icon: <FaGitAlt size={24} /> },
//   { name: "HTML/CSS", icon: (
//     <div className="flex space-x-2">
//       <FaHtml5 size={24} />
//       <FaCss3Alt size={24} />
//     </div>
//   ) },
// ];

// const Skills = () => {
//   return (
//     <div className="p-4 bg-[#11071f] min-h-screen">
//       <h1 className="text-2xl font-bold mb-4 text-white">Skills</h1>
      
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2 text-white">Technical Skills:</h2>
//         <ul className="list-none pl-0 text-white">
//           {skillsList.map((skill, index) => (
//             <li key={index} className="flex items-center mb-2 text-lg">
//               <span className="mr-3">{skill.icon}</span>
//               {skill.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="relative w-full h-[60vh] mb-8 overflow-hidden border-4 border-[#11071f]">
//         <video
        
//           className="absolute top-0 left-0 w-96 h-full object-cover"
//           src={myVideo} // Ensure the path is correct
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-gradient-to-t from-[#11071f] via-transparent to-[#11071f] opacity-70 flex items-center justify-center">
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import { FaJs, FaReact, FaCss3Alt, FaPython, FaNodeJs, FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql } from 'react-icons/si';

const skillsList = [
  { name: "JavaScript", icon: <FaJs size={24} /> },
  { name: "React", icon: <FaReact size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "Node.js", icon: <FaNodeJs size={24} /> },
  { name: "Python", icon: <FaPython size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
  { name: "Git", icon: <FaGitAlt size={24} /> },
  { name: "HTML/CSS", icon: (
    <div className="flex space-x-2">
      <FaHtml5 size={24} />
      <FaCss3Alt size={24} />
    </div>
  ) },
];

const Skills = () => {
  return (
    <div className="p-4 bg-[#11071f] min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Skills</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-white">Technical Skills:</h2>
        <ul className="list-none pl-0 text-white">
          {skillsList.map((skill, index) => (
            <li key={index} className="flex items-center mb-2 text-lg">
              <span className="mr-3">{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
