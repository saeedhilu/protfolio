// import React from "react";
// import ProjectImage from "../common/Projectiamge";
// import Pimage from "../assets/RoomImage.png";
// import image1 from "../assets/detailpage.png";
// import laptopFrame from "../assets/laptopFrameNew.webp";
// import { motion } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
// import P1impSection from "../sections/p1impfeture";
// import P2impSection from "../sections/p2impfeture";

// const letterVariants = {
//   hidden: { opacity: 0, x: -50, y: -50 },
//   visible: { opacity: 1, x: 0, y: 0 }, 
// };

// const heading = "Zoomzzz";

// const Project1 = () => {
//   const { ref: laptopRef, inView: laptopInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const { ref: textRef, inView: textInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div className="p-4">
//       <div className="pr-20">
//         <ProjectImage image={Pimage} />
//       </div>
//       <div className="mt-8">
        
//         <div className="flex gap-8 items-center">
//           <div className="relative w-[700px] h-[400px] mt-10">
//             {/* Animated Laptop Frame */}
//             <motion.img
//               src={laptopFrame}
//               alt="Laptop Frame"
//               className="w-full h-full object-cover"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: laptopInView ? 1 : 0 }}
//               transition={{ duration: 1 }}
//               ref={laptopRef}
//             />

//             {/* Animated Content Image */}
//             <motion.img
//               src={image1}
//               alt="Detail Page"
//               className="absolute w-5/6 mt-6 object-cover rounded-lg shadow-lg"
//               style={{ zIndex: 20, top: "0%", left: "8%" }}
//               initial={{ scale: 0.8 }}
//               animate={{ scale: laptopInView ? 1 : 0.8 }}
//               transition={{ duration: 1, type: "spring" }}
//             />
//           </div>
//           <div className="flex-1 ml-10">
//             {/* Animated Heading with Letter-by-Letter Animation */}
//             <div className="text-4xl font-bold">
//               {heading.split("").map((letter, index) => (
//                 <motion.span
//                   key={index}
//                   className="inline-block"
//                   variants={letterVariants}
//                   initial="hidden"
//                   animate={textInView ? "visible" : "hidden"}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.1,
//                     type: "spring",
//                     stiffness: 50,
//                   }}
//                   ref={textRef}
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//             </div>
//             {/* Animated Paragraph */}
//             <motion.p
//               className="mt-6 font-semibold text-lg w-1/2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               ref={textRef}
//             >
//               Room Booking is a web app built with React, Redux, and Node.js,
//               utilizing PostgreSQL for data storage. It lets users search, book
//               rooms, and view their history, with integrated payment processing.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//       <P1impSection/>
//       <P2impSection/>
//     </div>
//   );
// };

// export default Project1;
