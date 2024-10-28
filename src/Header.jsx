import React, { useState, useEffect } from "react";
import { NavLink ,Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  faHouse,
  faUser,
  faTv,
  faFileInvoice,
  faEnvelope,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropDownMenuItemsTextColor, setDropDownMenuItemsTextColor] =
    useState("text-blue-950");


  useEffect(() => {
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
    <div className=" w-full p-3 text-white relative">
      <div className="inline-block">
        <h1 className="text-3xl ">
          GSA<p className="animate-bounce inline-block pl-1">.</p>
        </h1>
      </div>

      <div className="hidden md:inline-block float-right ">
        <ul>
          <li>
            <NavLink
              to="/"
              className="mr-8 text-lg hover:border-b-4 hover:rounded-full"
            >
              <FontAwesomeIcon icon={faHouse} style={{ color: "#74C0FC" }} />{" "}
              Home
            </NavLink>
            <NavLink to="/about" className="mr-8 text-lg">
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  paddingRight: "3px",
                  position: "relative",
                  top: "-2px",
                }}
              />
              About Me
            </NavLink>
            <NavLink to="/project" className="mr-8 text-lg">
              <FontAwesomeIcon icon={faTv} />
              Projects
            </NavLink>
            <NavLink to="/resume" className="mr-8 text-lg">
              <FontAwesomeIcon icon={faFileInvoice} />
              Resume
            </NavLink>
            <NavLink to="/contact" className="mr-8 text-lg">
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </NavLink>
            <div className="inline-block  text-xl mr-4">
              <FontAwesomeIcon icon={faCircleHalfStroke} flip="vertical" />
            </div>
          </li>
        </ul>
      </div>

      <div
        className="float-right block md:hidden"
        onClick={() => {
          let body = document.getElementById("body");
          if (body.className.includes("overflow-hidden")) {
            body.classList.remove("overflow-hidden");
          } else {
            body.classList.add("overflow-hidden");
          }

          setIsDropdownVisible((prev) => !prev);
        }}
      >
         <div className="inline-block  text-3xl mr-10">
              <FontAwesomeIcon icon={faCircleHalfStroke} flip="vertical" />
            </div>
            <div className="inline-block">
        <div
          className={`w-8 bg-white transition-all duration-300  ${
            isDropdownVisible ? "rotate-45 translate-y-1.5" : ""
          }`}
          style={{ padding: "1.5px" }}
        ></div>
        <div
          
          className={` ${isDropdownVisible ? "hidden" : "w-8 bg-white mt-2"}`}
          style={{ padding: "1.5px" }}
        ></div>
        <div
        
          className={`w-8 bg-white mt-2 transition-all duration-200 ${
            isDropdownVisible ? "-rotate-45 -translate-y-1.5" : ""
          }`}
          style={{ padding: "1.5px" }}
        ></div>
        </div>
      </div>

      {isDropdownVisible ? (
        <div className={` absolute  animate-dropdown ${dropDownMenuItemsTextColor} min-h-screen bg-blue-950 md:hidden w-80 z-10 transition-all duration-300 text-center flex flex-col `}>
          <div >
            <div className="text-3xl  mt-4 tracking-wide hover:scale-110">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="text-3xl  mt-3 tracking-wide hover:scale-110">
              <NavLink to="/about">About</NavLink>
            </div>
         
          <div className="text-3xl  mt-3 tracking-wide hover:scale-110">
            <NavLink to="/projects">Projects</NavLink>
          </div>
          <div className="text-3xl  mt-3 tracking-wide hover:scale-110">
            <NavLink to="/resume">Resume</NavLink>
          </div>
          <div className="text-3xl  mt-3 tracking-wide hover:scale-110">
            <NavLink to="/contact">Contact</NavLink>
          </div>
          </div>
          <div className="mt-80">
        
        <Link to="https://github.com/shanaulakh29">
         <GitHubIcon className="z-30 mr-6" style={{fontSize: '2.5rem'}}/>
         </Link>
         <Link to="https://www.linkedin.com/in/shan-aulakh-183a94192/">
          <LinkedInIcon style={{fontSize: '2.5rem'}}/>
          </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
