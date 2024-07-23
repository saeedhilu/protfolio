// src/animations/ThreeDAnimation.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

const ThreeDAnimation = () => {
  // Define animation variants
  const variants = {
    hidden: { scale: 0.8, rotateX: 0, rotateY: 0 },
    visible: { scale: 1.2, rotateX: Math.PI / 4, rotateY: Math.PI / 4 },
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <motion.mesh
        initial="hidden"
        animate="visible"
        variants={variants}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="skyblue" />
      </motion.mesh>
    </Canvas>
  );
};

export default ThreeDAnimation;
    