import React from "react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Navbar from "../src/components/Navbar/Navbar";

const index = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-content">
        <Navbar />
        home 
      </div>
    </div>
  );
};

export default index;
