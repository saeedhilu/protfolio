import React, { useState } from "react";
import { FaDownload, FaEye, FaTimes } from "react-icons/fa";
import AnimatedButton from "../components/AnimatedButton";
import resumePdf from "../assets/cv.pdf"; // Your PDF file
import Ghost from "../animations/Ghost/Ghost";

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="resume" className="p-8 max-w-6xl mx-auto text-white rounded-lg overflow-hidden">
    <Ghost/>
      {/* Header Section */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">Resume</h1>
      </div>

      {/* Resume Content */}
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-lg mb-4">
            Here is a brief overview of my professional background and experience. Click on "View CV" to see the full version or "Download Resume" to get a copy.
          </p>
          <div className="flex space-x-20">
            <div onClick={openModal}>
              <AnimatedButton text="View CV" />
            </div>
           
            <a
              href={resumePdf}
              download
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
            >
              <FaDownload className="text-lg" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Resume Thumbnail and Buttons */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
          <img
            src="/path/to/thumbnail.jpg" // Replace with a thumbnail image or placeholder
            alt="Resume Thumbnail"
            className="w-96 md:w-96 object-cover h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={openModal}
          />
        </div>
      </div>

      {/* Modal for Full Resume View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              <FaTimes className="text-2xl" />
            </button>
            <embed
              src={resumePdf}
              type="application/pdf"
              className="w-full h-screen mt-10 rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
