import React from "react";
import Navbar from "../components/Navbar";
import img from "../assets/hero5.jpeg";
import Footer from "../components/Footer";
import { FaCheckSquare } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const About = () => {
  return (
    <section className="bg-white h-full">
      <Navbar />
      <Sidebar/>
      <div className="flex flex-col md:flex-row m-8 gap-8">
        <div className="mt-10  ">
          <p className="text-black tracking-wide mb-4 font-semibold">
            Susanskar has been established in 2002 with the intention of
            cultivating different kinds of skills and capabilities among the
            creative kids. It’s major work is to search out the proper intinct
            and mould versatility in the most attractive manner.
          </p>
          <p className="text-black tracking-wide mb-4 font-semibold">
            This is an effort to provide the best to the fertile brain,
            believing as you sow, so shall you reap. The child’s caliber is
            nourished to promote a natural and lasting growth rather than the
            methods which only produce momentary result and eye-impressions.
          </p>
          <p className="text-black tracking-wide mb-4 font-semibold">
            Susanskar started its journey on 23rd June 2002 with classes Nursery
            and KGs. Now it has grown into full-fledged co-educational school
            having classes Nursery to 10th grade. It is affiliated to the
            council for Secondary School Certificate Examination, Maharashtra
            State. Within a short period of time, it has grown into one of the
            best schools in the city of Yavatmal, Maharshtra.
          </p>
        </div>
        <img
          src={img}
          className="h-96 w-96 object-cover border-2 border-black rounded"
        />
      </div>
      <div className="m-8 ">
        <h4 className="text-lg tracking-wider text-[#427BD2] font-bold">
          Susanskar is founded on very sound principles.
        </h4>
        <p className="flex mt-4">
          <FaCheckSquare className="mt-1 mr-2 text-[#427BD2]" />
          <span className="text-gray-900 font-bold tracking-wider">
            Believes in “Sanskar Mahattam Dhanaha”
          </span>
        </p>
        <p className="flex mt-4">
          <FaCheckSquare className="mt-1 mr-2 text-[#427BD2]" />
          <span className="text-gray-900 font-bold tracking-wider">Inspires to imbibe Human Values</span>
        </p>
        <p className="flex mt-4">
          <FaCheckSquare className="mt-1 mr-2 text-[#427BD2]" />
          <span className="text-gray-900 font-bold tracking-wider">Lays foundation of modern education</span>
        </p>
        <p className="flex mt-4">
          <FaCheckSquare className="mt-1 mr-2 text-[#427BD2]" />
          <span className="text-gray-900 font-bold tracking-wider">A rational commitment to Indian culture</span>
        </p>
      </div>
      <p className="p-8 text-gray-900 tracking-wide font-semibold">Susanskar has adopted for its educational endeavour Holistic learning which transforms a person into an ideal and outstanding personality by inculcating human values and qualities to make him more dynamic, discreet, duty conscious and responsible towards himself as well as the nature, society and Nation.</p>
      <Footer />
    </section>
  );
};

export default About;
