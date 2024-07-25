import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/Project";
import Resume from "./pages/ResumeSection";
import Sidebar from "./components/Sidebar";
import Skills from "./pages/Skills";
import AnimatedVideo from "./animations/svg/AnimatedSvg";
import ParticlesBackground from "./animations/particles/ParticlesBackground";


function App() {
  return (
    <div className="flex flex-col sm:flex-row">
    <ParticlesBackground/>
      <Sidebar />
      <div className="flex-1 pt-16 sm:pl-40">
        <Home />
        <About />
        <Skills />

        <ProjectPage />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
