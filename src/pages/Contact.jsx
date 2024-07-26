import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import ShootingStars from '../animations/shootingstar/ShootingStars';
import FallingDrops from '../animations/waterdrops/FallingDrops';
const Contact = () => {
  return (
    <section id="contact" className="p-8 text-white min-h-screen flex flex-col items-center  relative overflow-hidden">
      <FallingDrops />
      <div className="max-w-3xl w-full relative z-10"> {/* Ensure content is above the shooting stars */}
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="mb-8 text-center">Feel free to reach out via the form below or connect with me on LinkedIn.</p>
        
        <form className="p-6 -800 rounded-lg shadow-lg mb-8 relative z-10">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 -900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 -900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 -900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold"
          >
            Send Message
          </button>
        </form>

        <div className="text-center relative z-10">
          <p className="mb-4">You can also find me on:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com" className="text-2xl hover:text-purple-600">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="text-2xl hover:text-purple-600">
              <FaGithub />
            </a>
            <a href="https://twitter.com" className="text-2xl hover:text-purple-600">
              <FaTwitter />
            </a>
            <a href="mailto:saeed@example.com" className="text-2xl hover:text-purple-600">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
