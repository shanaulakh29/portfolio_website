import React, { useRef, useEffect } from "react";
import WindowWidth from "./WindowWidth";
export default function InitialDesign() {
    let currentWindowWidth = WindowWidth();
    const svgContainerDiv = useRef();
    const movingDiv=useRef();
    const allItemsContainer = useRef();
    let textWidth=currentWindowWidth>700?45:20;

  return (
    <div ref={allItemsContainer} className="min-h-screen bg-slate-900 relative fadeDiv max-h-screen">

      <div ref={svgContainerDiv}className=" flex justify-center items-center min-h-screen ">
        <svg  width="700" height="700" >
          <g>
            <title>Layer 1</title>
            <ellipse
              cx="50%"
              cy="50%"
              fill="purple"
             fillOpacity="0.1"
              id="svg_2"
              rx="300"
              ry="300"
              stroke="#748ef7"
              strokeWidth="5"
            >
              <animate
                attributeName="rx"
                from="45%"
                to="30%"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="ry"
                from="45%"
                to="30%"
                dur="5s"
                repeatCount="indefinite"
              />
            </ellipse>

            <ellipse
              cx="50%"
              cy="50%"
              fill="black"
              fillOpacity="0.8"
              id="svg_3"
              rx="200"
              ry="200"
              stroke="#748ef7"
              strokeWidth="5"
            >
              <animate
                attributeName="rx"
                from="30%"
                to="45%"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="ry"
                from="30%"
                to="45%"
                dur="5s"
                repeatCount="indefinite"
              />
            </ellipse>
            <text

              x="50%"
              y="50%"
              textAnchor="middle"
             fill="purple"
              alignmentBaseline="middle"
             fontFamily="'Rubik Wet Paint', cursive"
            
             fontStyle="italic"
              fontSize={textWidth}
            >
              Gurshan Aulakh
             
            </text>
          </g>
        </svg>
      </div>
     
    </div>
   
  );
}
