import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <div className=" mt-6 flex justify-between h-14 items-center bg-slate-900">
      <div className="ml-6 tracking-wide text-center sm:text-left">
        &copy; 2024 <span className="block sm:inline-block">- Gurshan Aulakh</span> <p className="hidden lg:inline text-center pl-3">No rights reserved.</p>
      </div>
      <div className="mr-6 flex items-center w-1/2 justify-evenly xl:justify-end">
      <Link to="/contact">
      <button className="flex items-center justify-center rounded-xl border-white border-2 hover:border-purple-500 hover:text-purple-500 h-10 w-32 xl:mr-14"> {/* Added padding for a better button size */}
          Email Me
        </button>
        </Link> 

        <button className="xl:mr-14  hover:shadow-purple-500 shadow-xl hover:scale-110">
          
          <Link to="https://github.com/shanaulakh29"><GitHubIcon style={{ fontSize: '2.5rem', }}/> </Link>

        </button>
        <button className="xl:mr-10 hover:shadow-purple-500 shadow-xl hover:scale-110">
          
          <Link to="https://www.linkedin.com/in/shan-aulakh-183a94192/"><LinkedInIcon style={{ fontSize: '2.5rem' }} /> </Link>
        </button>
      </div>
    </div>
  );
}
