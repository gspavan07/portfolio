import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoArrowUp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section
      id="contact"
      className="text-white py-12 flex flex-col w-full justify-center items-center text-center"
    >
      <span className=" w-fit mb-2 p-4 rounded-xl text-3xl font-medium">
        Pavan Gollapalli
      </span>
      {/* <h2 className="text-3xl font-bold mt-4">Let's talk!</h2> */}

      <div className="flex w-full justify-center items-center gap-4">
        <Link className="flex items-center gap-2 border border-purple-800 px-4 py-2 rounded-lg text-[#7B4AE2] hover:bg-[#7B4AE2]/9 hover:text-white">
          <FaWhatsapp /> Let's chat
        </Link>
        <Link
          to="mailto:dev.pavangollapalli@gmail.com"
          className="flex items-center gap-2 text-[#7B4AE2]"
        >
          <MdEmail size={25} />
          <span>dev.pavangollapalli@gmail.com</span>
          {/* <IoCopyOutline size={20} /> */}
        </Link>
      </div>

      <div className="mt-10">
        <a
          href="#top"
          className="text-[#7B4AE2] hover:text-[#7B4AE2] flex items-center gap-1"
        >
          Back to top <IoArrowUp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
