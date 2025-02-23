import React, { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" lg:bg-[#7B4AE2]/5 rounded-2xl z-20">
      <div className="lg:hidden flex justify-center items-center gap-5 cursor-pointer">
        <SiLinkedin color="grey" size={40} className="rounded-full" />
        <SiGithub color="grey " size={40} className="rounded-full" />
      </div>
      <div className="px-12 py-4 lg:flex hidden items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </a>
        </div>

        {/* Navbar Items */}
        <div className="space-x-8 flex items-center">
          {/* Projects */}
          <div>
            <a
              href="#products"
              className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
            >
              <span className="font-medium ml-2">Projects</span>
            </a>
          </div>
          {/* Services */}
          <div>
            <a
              href="#services"
              className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
            >
              <span className="font-medium ml-2">Services</span>
            </a>
          </div>
          {/* Careers */}
          <div>
            <a
              href="#careers"
              className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
            >
              <span className="font-medium ml-2">Careers</span>
            </a>
          </div>
          {/* Contact */}
          <div>
            <a
              href="#contact"
              className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
            >
              <span className="font-bold ml-2">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
