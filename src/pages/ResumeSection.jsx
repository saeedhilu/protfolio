import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import the download icon from react-icons
import resumeThumbnail from '../assets/cv.jpg'; // Import your resume thumbnail image

const Resume = () => {
  return (
    <section id="resume" className="p-8 max-w-6xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Resume</h1>
        <p className="text-lg">Explore my professional background and achievements.</p>
      </div>

      {/* Resume Thumbnail and Download Button */}
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        {/* Resume Thumbnail */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={resumeThumbnail} 
            alt="Resume Thumbnail" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Download Button */}
        <div className="text-center md:text-right md:w-1/2">
          <a 
            href="/resume.pdf" 
            download 
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 mx-auto"
          >
            <FaDownload className="text-lg" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
