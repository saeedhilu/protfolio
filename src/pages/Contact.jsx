import React, { useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ShootingStars from '../animations/shootingstar/ShootingStars';
import Ghost from '../animations/Ghost/Ghost';
import AnimatedButton from '../components/AnimatedButton';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error("Failed to send email:", error);
        alert('Failed to send the message, please try again later.');
    });

    e.target.reset(); // 
  };

  return (
    <section id="contact" className="relative p-8 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <Ghost />
      <div className="absolute inset-0 overflow-hidden">
        <ShootingStars />
      </div>

      <div className="max-w-3xl w-full relative z-10 bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="mb-8 text-center">Feel free to reach out via the form below or connect with me on LinkedIn.</p>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-gray-900 bg-opacity-25 rounded-lg focus:outline-none focus:ring-2 border border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-900 bg-opacity-25 rounded-lg focus:outline-none focus:ring-2 border border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 bg-gray-900 bg-opacity-25 rounded-lg focus:outline-none focus:ring-2 border border-gray-600"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">
            {/* <AnimatedButton text="Send Message" /> */}
            send message
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="mb-4">You can also find me on:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/saeed-nm-62924b23a/" className="text-2xl hover:text-purple-600">
              <FaLinkedin />
            </a>
            <a href="https://github.com/saeedhilu" className="text-2xl hover:text-purple-600">
              <FaGithub />
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
