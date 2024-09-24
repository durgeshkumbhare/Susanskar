import React from "react";
import { IoLocationSharp, IoCall, IoMailSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright, FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#E9E9E9] p-8  ">
      <div className="flex">
        <div>
          <h2 className="capitalize text-[#427BD2] text-xl ">
            susanskar vidya mandir
          </h2>
          <div className="flex mt-4">
            <IoLocationSharp className="inline mr-2 mt-1 text-[#427BD2] text-xl" />
            <p className="text-black ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati totam distinctio nisi quae praesentium cupiditate.
            </p>
          </div>
          <div className="flex mt-4">
            <IoCall className="inline mr-2 mt-1 text-[#427BD2] text-xl" />
            <p className="text-black ">8888999304</p>
          </div>
          <div className="flex mt-4">
            <IoMailSharp className="inline mr-2 mt-1 text-[#427BD2] text-xl" />
            <p className="text-black ">susanskarvidyamandir@gmail.com</p>
          </div>
          <div className="flex mt-4 text-2xl gap-4 text-[#427BD2]">
            <a href="/">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="text-black flex flex-col ml-4">
          <h2 className="mb-4 flex  font-bold">Important Links</h2>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
          <Link to="/management">About our Founders</Link>
        </div>

        <div className="ml-2 hidden md:block">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Our Location</h3>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5241415957783!2d78.11546971490287!3d20.383198986333024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3e8a4396e91cb%3A0xda96015d78fff47f!2sSusanskar%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1695738986826!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 h-60 "
          />
        </div>
      </div>
      <div className="text-center flex border-t-2 border-b-2 border-black mt-6 py-4 text-black">
        <FaRegCopyright className="text-black mt-[5px] mr-2" />
        <p className="capitalize">
          2023 all rights are reserved. | Design  by
          <span> ICEICO Technologies pvt ltd.</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
