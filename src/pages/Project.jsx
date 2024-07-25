import React from 'react';
import rooomimage from '../assets/RoomImage.png'; // Ensure this path is correct

const projects = [
  {
    name: 'Zoomzzz',
    description: (
      <>
        <p>Zoomzzz is a room booking platform with admin, user, and vendor roles. Users can book rooms, add reviews, and make payments. Admins manage the platform, and vendors handle room listings. Optimized with caching and animations.</p>
        <p><strong>Tools Used:</strong> React JS, Redux Toolkit, Lazy Motion, Django REST Framework, Caching</p>
        <a href="https://zoomzzz.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Visit Website</a>
      </>
    ),
    image: rooomimage, // Direct use of imported image
  },
  {
    name: 'Kanban Drag and Drop',
    description: (
      <>
        <p>A fully functional Kanban board application with drag-and-drop functionality, allowing users to move tasks across different columns: Upcoming, In Progress, and Completed.</p>
        <p><strong>Tools Used:</strong> React JS, Redux Toolkit, React Beautiful DnD, Django REST Framework</p>
        <a href="https://kanban.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Visit Website</a>
      </>
    ),
    image: 'https://via.placeholder.com/400x300', 
  },
  {
    name: 'Seminar Hall Booking',
    description: (
      <>
        <p>The Seminar Hall Booking application simplifies the process of reserving seminar halls for events, workshops, and conferences. Users can easily view hall availability, make reservations, and manage their bookings all from within the app.</p>
        <p><strong>Tools Used:</strong> React JS, Django REST Framework</p>
        <a href="https://seminarhallbooking.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Visit Website</a>
      </>
    ),
    image: 'https://via.placeholder.com/400x300', 
  },
  {
    name: 'Pexel Image Downloading App',
    description: (
      <>
        <p>This app allows users to search, download, and wishlist high-quality images from Pexels, a popular free stock photo site. The app includes search functionality, image preview, download options, and the ability to save favorite images to a wishlist.</p>
        <p><strong>Tools Used:</strong> React JS, Django REST Framework, Pexels API</p>
        <a href="https://pexelimageapp.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Visit Website</a>
      </>
    ),
    image: 'https://via.placeholder.com/400x300', 
  },
];

const ProjectCard = ({ project, index }) => (
  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-8`}>
    <div className="md:w-1/2">
      <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-lg shadow-lg" />
    </div>
    <div className="md:w-1/2 md:px-8 flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
      <div className="text-lg">{project.description}</div>
    </div>
  </div>
);

const ProjectPage = () => {
  return (
    <section id="projects" className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </section>
  );
};

export default ProjectPage;
