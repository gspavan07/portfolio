import React from "react";

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center my-8 text-white px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl">
        {/* Profile Image */}
        <div className="relative w-60 h-60 md:w-96 md:h-96">
          <img
            src="/img.jpg" // Update with the correct path
            alt="Profile"
            className="w-full h-full object-cover rounded-full "
          />
        </div>

        {/* Text Content */}
        <div className="text-left">
          <span className="bg-[#7a4ae22a] text-[#7B4AE2] w-fit p-4 rounded-xl text-sm font-medium">
            💡 About Me
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mt-8">
            Pavan Gollapalli
          </h1>
          <p className="mt-2 flex items-center">
            <span className="mr-2">👋</span> My name is Shanmuk Pavan
            Gollapalli, but you can just call me Pavan. Nice to meet you!
          </p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">🔐</span> I have been developing and
            programming interfaces with JavaScript, React JS, and Tailwindcss
            for over 1 year.
          </p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">🎓</span> Student of Artificial Intelligence
            and Machine Learning from Aditya University.
          </p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">💡</span> Interested in Fullstack Development
            with React, NextJS, NodeJS, and Mobile Development.
          </p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">🚀</span> Trying to be a little better than
            yesterday every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
