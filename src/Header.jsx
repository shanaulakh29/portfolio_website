import React from "react";
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
            <NavLink to="" className="mr-8 text-lg">
              <FontAwesomeIcon icon={faTv} />
              Projects
            </NavLink>
            <NavLink to="" className="mr-8 text-lg">
              <FontAwesomeIcon icon={faFileInvoice} />
              Resume
            </NavLink>
            <NavLink to="" className="mr-8 text-lg">
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </NavLink>
            <div className="inline-block  text-lg">
              <FontAwesomeIcon icon={faCircleHalfStroke} flip="vertical" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
