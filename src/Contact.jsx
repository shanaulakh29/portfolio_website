import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="md:min-h-screen md:flex md:items-center md:justify-center">
      <div className=" flex flex-col md:flex-row md:justify-center items-center  md:w-5/6 rounded-xl overflow-hidden bg-purple-800">
        <div className="md:w-1/2 text-center lg:text-left lg:pl-6  md:pt-0  mt-8 md:mt-0">
            <h1 className="text-5xl">Let's Connect</h1>
            <p className="pt-6 tracking-widest">
              I'm always open to new opportunities and collaborations. Whether
              you have an exciting project in mind, want to discuss potential
              job opportunities, or simply connect, I'd love to hear from you.
            </p>
            <div className="pt-4 sm:mb-8">
            <GitHubIcon style={{fontSize:"40px", marginRight:"10px"}}/>
            <LinkedInIcon style={{fontSize:"40px"}}/>
            </div>
   
        </div>
        <div className=" w-full  md:w-1/2 bg-slate-500 p-10">
          <form action="">
            <label htmlFor="" className="block tracking-widest">
              Name
            </label>
            <input
              type="text"
              className="block outline-none  bg-slate-500 border-b-2 w-full pt-2"
            />
            <label htmlFor="" className="mt-8 block tracking-widest">
              Email
            </label>
            <input
              type="text"
              className="block outline-none bg-slate-500 border-b-2 w-full pt-2"
            />
            <label htmlFor="" className="mt-8 block tracking-widest">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full outline-none bg-slate-500 border-b-2 pt-2"
            ></textarea>
            <button className="float-end w-32 border rounded-full mt-6 h-10 hover:bg-white hover:text-slate-500 transition-all duration-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
