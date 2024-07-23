import React from "react";

const ProjectImage = ({ image }) => {
  // Destructure `image` from props
  console.log(image);
  return (
    <div className=" rounded-3xl ">
      <img
        src={image}
        alt="project-image"
        className="rounded-2xl w-full h-auto   "
      />
    </div>
  );
};

export default ProjectImage;
