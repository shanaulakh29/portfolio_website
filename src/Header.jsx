import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WindowWidth from "./WindowWidth.jsx";
import {
  faHouse,
  faUser,
  faTv,
  faFileInvoice,
  faEnvelope,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  let windowWidth=WindowWidth();
  let body = document.getElementById("body");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropDownMenuItemsTextColor, setDropDownMenuItemsTextColor] =
    useState("text-blue-950");
    function changeDropDownVisileState(){
      setIsDropdownVisible((prev) => !prev);
    }
    useEffect(() => {
      if (windowWidth > 768) {
        setIsDropdownVisible(false);
      }
    }, [windowWidth]);
  useEffect(() => {

    if(isDropdownVisible) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    if (isDropdownVisible) {
      let intervalId = setTimeout(() => {
        setDropDownMenuItemsTextColor("text-white");
      }, 300);
      return () => {
        clearInterval(intervalId);
        setDropDownMenuItemsTextColor("text-blue-950");
      };
    }
  }, [isDropdownVisible]);

  return (
    <div className=" w-full p-3 text-white relative bg-slate-900">
      <div className="inline-block">
        <h1 className="text-4xl font-serif font-bold">
          GA
          <p className="animate-bounce inline-block pl-1 text-yellow-500">.</p>
        </h1>
      </div>

      <div className="hidden md:inline-block float-right mt-3">
        <NavLink to="/" className="mr-7 text-xl inline-block group">
          <FontAwesomeIcon
            icon={faHouse}
            className="mr-1 relative -top-0.5"
            style={{ color: "#74C0FC" }}
          />
          Home
          <div className="  scale-x-0 h-1  rounded-xl bg-purple-500 transition-all duration-1000 origin-left group-hover:scale-x-100 "></div>
        </NavLink>
        <NavLink to="/about" className="mr-7 text-xl inline-block group ">
          <FontAwesomeIcon
            icon={faUser}
            style={{
              paddingRight: "3px",
              position: "relative",
              top: "-2px",
            }}
          />
          About Me
          <div className=" scale-x-0 h-1  rounded-xl bg-purple-500 transition-all duration-1000 origin-left group-hover:scale-x-100 "></div>
        </NavLink>
        <NavLink to="/project" className="mr-7 text-xl inline-block group">
          <FontAwesomeIcon icon={faTv} className="mr-1" />
          Projects
          <div className="  scale-x-0 h-1  rounded-xl bg-purple-500 transition-all duration-1000 origin-left group-hover:scale-x-100 "></div>
        </NavLink>
        <NavLink to="/resume" className="mr-7 text-xl inline-block group">
          <FontAwesomeIcon icon={faFileInvoice} className="mr-1" />
          Resume
          <div className="  scale-x-0 h-1  rounded-xl bg-purple-500 transition-all duration-1000 origin-left group-hover:scale-x-100 "></div>
        </NavLink>
        <NavLink to="/contact" className="mr-7 text-xl inline-block  group">
          <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
          Contact
          <div className="  scale-x-0 h-1  rounded-xl bg-purple-500 transition-all duration-1000 origin-left group-hover:scale-x-100 "></div>
        </NavLink>
        {/* <div className="inline-block  text-xl mr-2">
              <FontAwesomeIcon icon={faCircleHalfStroke} flip="vertical" />
            </div> */}
      </div>

      <div
        className="float-right inline-block md:hidden cursor-pointer "
       onClick={changeDropDownVisileState}
      >
        <div className="p-2">
          <div
            className={`w-9 bg-white transition-all duration-300  ${
              isDropdownVisible ? "rotate-45 translate-y-1.5" : ""
            }`}
            style={{ padding: "1.5px" }}
          ></div>
          <div
            className={` ${isDropdownVisible ? "hidden" : "w-9 bg-white mt-2"}`}
            style={{ padding: "1.5px" }}
          ></div>
          <div
            className={`w-9 bg-white mt-2 transition-all duration-200 ${
              isDropdownVisible ? "-rotate-45 -translate-y-1.5" : ""
            }`}
            style={{ padding: "1.5px" }}
          ></div>
        </div>
      </div>

      {isDropdownVisible ? (
        <div
          className={` absolute  animate-dropdown-Container  ${dropDownMenuItemsTextColor} min-h-screen bg-blue-950 md:hidden w-80 z-10 transition-all duration-300 text-center flex flex-col `}
        >
          <div>
            <div
              className="text-3xl  mt-4 tracking-wide hover:scale-110 hover:text-purple-500"
              onClick={changeDropDownVisileState}
            >
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="text-3xl  mt-3 tracking-wide hover:scale-110 hover:text-purple-500 "  onClick={changeDropDownVisileState}>
              <NavLink to="/about">About</NavLink>
            </div>

            <div className="text-3xl  mt-3 tracking-wide hover:scale-110 hover:text-purple-500"  onClick={changeDropDownVisileState}>
              <NavLink to="/project">Projects</NavLink>
            </div>
            <div className="text-3xl  mt-3 tracking-wide hover:scale-110 hover:text-purple-500"  onClick={changeDropDownVisileState}>
              <NavLink to="/resume">Resume</NavLink>
            </div>
            <div className="text-3xl  mt-3 tracking-wide hover:scale-110 hover:text-purple-500"  onClick={changeDropDownVisileState}>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="mt-80">
            <Link
              to="https://github.com/shanaulakh29"
              className="hover:scale-110 inline-block hover:shadow-xl hover:shadow-slate-300 mr-8"
            >
              <GitHubIcon className="z-30 " style={{ fontSize: "2.5rem" }} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shan-aulakh-183a94192/"
              className="hover:scale-110 inline-block hover:shadow-xl hover:shadow-slate-300 "
            >
              <LinkedInIcon style={{ fontSize: "2.5rem" }} />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
