import React from "react";

const AboutCommon = ({ heading, text }) => {
  return (
    <div className="p-12 mt-10 w-full md:w-1/2">
      <h1 className="text-3xl font-bold leading-10 tracking-widest">{heading}</h1>
      <p className="mt-10 text-xl">{text}</p>
    </div>
  );
};

export default AboutCommon;
