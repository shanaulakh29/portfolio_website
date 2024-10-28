import React,{useRef, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const [dropDownMenuItemsTextColor, setDropDownMenuItemsTextColor] = useState('text-blue-950')
  const div1=useRef();
  const div2=useRef();
  const div3=useRef();

    useEffect(()=>{
      if(isDropdownVisible){
        let intervalId=  setTimeout(()=>{
          setDropDownMenuItemsTextColor("text-white")
          },300)
          return ()=>{
            clearInterval(intervalId)
            setDropDownMenuItemsTextColor("text-blue-950")
          }
      }
      
      },[isDropdownVisible]);
 
  
  return (
    <div className=" w-full p-3 text-white">
      <div className="inline-block">
        <h1 className="text-3xl ">
          GSA<p className="animate-bounce inline-block pl-1">.</p>
        </h1>
      </div>

      <div className="hidden md:inline-block float-right ">
        <ul>
          <li>
            <NavLink to="/" className="mr-8 text-lg hover:border-b-4 hover:rounded-full">
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
            <div className="inline-block  text-lg">
              <FontAwesomeIcon icon={faCircleHalfStroke} flip="vertical" />
            </div>
          </li>
        </ul>
      </div>

      <div className="float-right block md:hidden" onClick={()=>{
        
        let body= document.getElementById("body");
        if(body.className.includes("overflow-hidden")){
          body.classList.remove("overflow-hidden");
        }else{
          body.classList.add("overflow-hidden");
        }
       
        setIsDropdownVisible((prev)=>!prev);

      }}>
        <div ref={div1} className={`w-8 bg-white transition-all duration-300 ${isDropdownVisible? 'rotate-45 translate-y-1.5':''}`} style={{padding:"1.5px"}}></div>
        <div ref={div2} className={` ${isDropdownVisible?'hidden':'w-8 bg-white mt-2'}`} style={{padding:"1.5px"}}></div>
        <div ref={div3} className={`w-8 bg-white mt-2 transition-all duration-200 ${isDropdownVisible?'-rotate-45 -translate-y-1.5':''}`} style={{padding:"1.5px"}}></div>
      </div>

      
        {isDropdownVisible ? (
      <div className="relative">    
  <div className={`absolute  animate-dropdown ${dropDownMenuItemsTextColor} min-h-screen bg-blue-950 md:hidden w-80 z-10 transition-all duration-300 text-center`}>

     <div className="text-5xl  mt-4 tracking-wide">
     <NavLink to="/">Home</NavLink></div>
    <div className="text-5xl  mt-3 tracking-wide">About</div>
    <div className="text-5xl  mt-3 tracking-wide">Projects</div>
    <div className="text-5xl  mt-3 tracking-wide">Resume</div>
    <div className="text-5xl  mt-3 tracking-wide">Contact</div>
    </div>

  </div> 
) : null}

      </div>

  );
}
