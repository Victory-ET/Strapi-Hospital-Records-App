import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Topnav() {
  return (
    <div className=" w-screen fixed flex items-center justify-center px-2 top-2 z-20">
      <nav className=" container flex items-start py-4 mt-4 sm:mt-12 backdrop-blur-md relative">
      {/* <nav className=" z-20 fixed container flex items-start py-4 mt-4 sm:mt-12 backdrop-blur top-1 lg:left-20 lg:w-full md:left-0 sm:left-0"> */}
        <div className=" relative">
          <h1 className=" text-blue-600 font-bold text-2xl">Hospital Records</h1>
        </div>
        <ul className="navigation sm:flex flex-1 justify-end items-center gap-12 text-slate-900 uppercase text-xs md:py-1">
          <li className="cursor-pointer">Home</li>
          <li className=" cursor-pointer">Search</li>
          <li className=" cursor-pointer">About</li>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end z-40">
        <FontAwesomeIcon className=" text-2xl" icon={faBars} />
        </div>
      </nav>
    </div>
  );
}

export default Topnav;
