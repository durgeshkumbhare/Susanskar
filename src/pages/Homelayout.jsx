import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Submenu from "../components/Submenu";
import Managment from "./Managment";

const Homelayout = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <Sidebar />
      <Landing />
      
    </div>
  );
};

export default Homelayout;
