import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Topnav() {
  const [show, setShow] = useState(false);
  return (
    <header>
      <div
        className=" w-screen fixed flex items-center justify-center px-2 top-2 z-20"
        
      >
        <nav className=" container flex items-start py-4 mt-4 sm:mt-12 backdrop-blur-md relative">
          {/* <nav className=" z-20 fixed container flex items-start py-4 mt-4 sm:mt-12 backdrop-blur top-1 lg:left-20 lg:w-full md:left-0 sm:left-0"> */}
          <div className=" relative">
            <h1 className=" text-blue-600 font-bold text-2xl">
              Hospital Records
            </h1>
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-slate-900 uppercase text-base font-medium md:py-1">
            <li className="cursor-pointer">
              <a href="#Home">Home</a>
            </li>
            <li className=" cursor-pointer">
              <a href="#Search">Search</a>
            </li>
            <li className=" cursor-pointer">
              <a href="http://strapi.io" target="_blank" rel="noreferrer">About Strapi</a>
            </li>
          </ul>

          {show ? (
            <ul className="navigation sm:flex flex-1 md:hidden justify-end items-center gap-12 text-slate-900 uppercase text-xs md:py-1">
              <li className="cursor-pointer">
                <a href="#Home" onClick={() => setShow(!show)}>Home</a>
              </li>
              <li className=" cursor-pointer">
                <a href="#Search" onClick={() => setShow(!show)}>Search</a>
              </li>
              <li className=" cursor-pointer">
                <a href="http://strapi.io" target="_blank" rel="noreferrer" onClick={() => setShow(!show)}>About Strapi</a>
              </li>
            </ul>
          ) : null}
          <div
            className="flex sm:hidden flex-1 justify-end z-40"
            onClick={() => setShow(!show)}
          >
            <FontAwesomeIcon
              className=" text-2xl"
              icon={show ? faTimes : faBars}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Topnav;
