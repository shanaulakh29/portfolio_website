import React, {useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import myResume from "./GurshanAulakhResume.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import WindowWidth from "./WindowWidth";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  let [resumeScale,setResumeScale]=useState(1)
   let windowWidth=WindowWidth();
   useEffect(()=>{
    if(windowWidth<500){
      setResumeScale(0.5)
    }else if(windowWidth<700) {
      setResumeScale(0.75)
    }else{
      setResumeScale(1)
    }
   },[windowWidth])
  return (
    <div className="pt-12 bg-white min-h-screen flex flex-col items-center">

      <button className="bg-blue-600 py-4 px-8 rounded-3xl shadow-2xl tracking-wide relative -top-1 active:-top-0 active:bg-blue-800 transition-all duration-300 ">
        <a href={myResume} download={myResume} className="inline-block ">
          Downlad
        </a>{" "}
        <FontAwesomeIcon icon={faFileArrowDown} />
      </button>

     
      <Document file={myResume} className={`border mt-2 mb-4  shadow-2xl`}>
        <Page pageNumber={1} renderAnnotationLayer={true} scale={resumeScale} />
      </Document>

      <div className="text-center mb-8">
      <button className="bg-blue-600 py-4 px-8 rounded-3xl shadow-2xl tracking-wide relative -top-1 active:-top-0 active:bg-blue-800 transition-all duration-300 ">
        <a href={myResume} download={myResume} className="inline-block ">
          Downlad
        </a>{" "}
        <FontAwesomeIcon icon={faFileArrowDown} />
      </button>
      </div>
    </div>
  );
}
