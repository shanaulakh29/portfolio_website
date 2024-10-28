import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileArrowDown}from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  return (
    <div className="pt-12 bg-white min-h-screen">
        <div className="text-center">
        <button className="bg-blue-600 py-4 px-8 rounded-3xl shadow-2xl tracking-wide relative -top-1 active:-top-0 active:bg-blue-800 transition-all duration-300 ">
            <div className="inline-block ">Downlad</div> <FontAwesomeIcon icon={faFileArrowDown} /></button>
        </div>

    </div>
  )
}
