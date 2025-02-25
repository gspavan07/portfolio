import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" lg:bg-[#110c20a4] md:mx-40 rounded-2xl z-20">
      <div className="lg:hidden flex justify-center items-center gap-5 cursor-pointer">
        <SiLinkedin color="grey" size={40} className="rounded-full" />
        <SiGithub color="grey " size={40} className="rounded-full" />
      </div>
      <div className="px-12 py-4 lg:flex hidden items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Navbar Items */}
        <div className="space-x-8 flex items-center">
          {/* Projects */}

          <Link
            to="#products"
            className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
          >
            <span className="font-bold ml-2">Projects</span>
          </Link>

          {/* Services */}

          <Link
            to="#services"
            className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
          >
            <span className="font-bold ml-2">Services</span>
          </Link>

          {/* Careers */}

          <Link
            to="#careers"
            className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
          >
            <span className="font-bold ml-2">Careers</span>
          </Link>

          {/* Contact */}

          <Link
            to="#contact"
            className="text-gray-500 hover:text-[#7B4AE2]/60 text-lg flex items-center"
          >
            <span className="font-bold ml-2">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
