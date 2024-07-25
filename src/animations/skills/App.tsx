import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import { FaJs, FaReact, FaCss3Alt, FaPython, FaNodeJs, FaGitAlt, FaHtml5, FaJava, FaFigma, FaGithub, FaRedditAlien } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiDjango, SiRedis, SiRedux, SiBootstrap, SiPostman, SiVisualstudiocode, SiNotion, SiVercel } from 'react-icons/si';
import "./styles.css";

const grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
const size = 100; 
const gap = 10; 

const skillIcons = [
  <FaJs size={52} color="#f0db4f" />, 
  <FaReact size={52} color="#61dbfb" />, 
  <SiTailwindcss size={52} color="#38bdf8" />,
  <FaPython size={52} color="#3776ab" />, 
  <SiPostgresql size={52} color="#336791" />,
  <FaGitAlt size={52} color="#f34f29" />, 
  <FaHtml5 size={52} color="#e34c26" />, 
  <FaCss3Alt size={52} color="#264de4" />,
  <FaJava size={52} color="#red-500" />, 
  <SiDjango size={52} color="#0C4B33" />, 
  <SiRedis size={52} color="#D82C20" />, 
  <FaFigma size={52} color="#F24E1E" />, 
  <SiRedux size={52} color="#764ABC" />, 
  <SiBootstrap size={52} color="#563D7C" />, 
  <SiPostman size={52} color="#FF6C37" />, 
  <FaGithub size={52} color="#181717" />, 
  <SiVisualstudiocode size={52} color="#007ACC" />, 
  <SiNotion size={52} color="#000000" />, 
  <SiVercel size={52} color="#000000" />, 
  <FaRedditAlien size={52} color="#10A37F" />
];

// Ensure unique icon for each square
const uniqueSkillIcons = [...skillIcons, ...skillIcons]; // Double the icons for unique mapping

const Square = ({ active, setActive, colIndex, rowIndex, x, y, icon }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        width: size,
        height: 300,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {icon}
    </motion.div>
  );
};

const App = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="app1">
      <motion.div
        animate={{ "--base-hue": 360 } as any}
        initial={{ "--base-hue": 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          style={{
            display: "flex",
            width: (size + gap) * 4 - gap,
            height: (size + gap - 40) * 4 - gap,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "relative",
            perspective: 500
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
                icon={uniqueSkillIcons[rowIndex * grid[0].length + colIndex]} // Map each square to a unique icon
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
