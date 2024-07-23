import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RoomImage from '../assets/RoomImage.png';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Zoomzzz",
    description: "A room booking platform for seamless scheduling and management.",
    image: RoomImage,
    bgColor: "bg-gray-900" // class for the background color
  },
  {
    title: "Art projects",
    description: "Explore various art projects and creative endeavors.",
    image: RoomImage,
    bgColor: "bg-gray-900" // class for the background color
  },
  {
    title: "Other projects",
    description: "A variety of projects showcasing different technologies and approaches.",
    image: RoomImage,
    bgColor: "bg-gray-900" // class for the background color
  }
];

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.019, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-6xl mx-auto py-8 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <motion.div 
              className={`relative ${project.bgColor} text-white p-8 rounded-3xl `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ height: '400px' }} // Fixed height for consistency
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg shadow-lg" />
              <div className="relative z-10 mt-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-lg">{project.description}</p>
                <a href="#" className="text-sm text-blue-400 underline">Learn more</a>
              </div>
            </motion.div>
          </div>
        ))}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default MyCarousel;
