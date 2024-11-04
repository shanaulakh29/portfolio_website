import React,{useEffect} from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
export default function HomePageText() {
  let arrayShowingWhoIDo = [
    "Web Developer ",
    "Software Engineer",
    "Tech Enthusiastic ",
    "Node.js Developer ",
    "UX/UI Enthusiast",
  ];
  const [text] = useTypewriter({
    words: arrayShowingWhoIDo,
    delay: 150,
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 100,
    deleteSpeed: 70,
  });
  useEffect(() => {
    // Initialize Vanilla Tilt on the image with data-tilt attribute
    const tiltElements = document.querySelectorAll("[data-tilt]");
    tiltElements.forEach((el) => {
      VanillaTilt.init(el, {
        max: 25, 
        speed: 400, 
        glare: true,
        "max-glare": 1 
      });
    });
    return () => {
      tiltElements.forEach((el) => {
        el.vanillaTilt.destroy();
      });
    };
  }, []);
  return (
    <div>
      <div className="lg:h-screen">
      <div className=" flex flex-col  lg:flex-row ">
        <div className="pl-6  w-full mt-16  lg:w-1/2  tracking-widest">
          <h1 className="text-6xl lg:text-8xl lg:pr-20 lg:pt-10 ">
            Hi There! </h1>
            <p className="pt-2 sm:text-5xl text-5xl lg:text-6xl mt-20">I'M <span className="text-purple-500">Gurshan Aulakh</span></p>
         

          <span className="pt-10 inline-block text-4xl lg:text-5xl ">
            {text}
            <Cursor cursorStyle="|"/>
          </span>

          
        </div>
        <div className="mt-10 lg:mt-0 border-blue-500  lg:w-1/2  rounded-xl ">
          <div className="lg:items-center mt-12 flex justify-center items-center ">
          {/* xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" */}
          <svg className=""  width="500" height="500" >
    <g >
     <title>Layer 1</title>
     <ellipse  cx="50%" cy="50%" fill="black" id="svg_2" rx="200" ry="200" stroke="#748ef7" strokeWidth="5" >
      <animate attributeName="rx" from="45%" to="30%" dur="5s"  repeatCount="indefinite"/>
      <animate attributeName="ry" from="45%" to="30%" dur="5s"  repeatCount="indefinite"/>
    </ellipse>


      <ellipse cx="50%" cy="50%" fill="black" id="svg_3" rx="100" ry="100" stroke="#748ef7" strokeWidth="5">
      <animate attributeName="rx" from="30%" to="45%" dur="5s"  repeatCount="indefinite"/>
      <animate attributeName="ry" from="30%" to="45%" dur="5s"  repeatCount="indefinite"/>
     </ellipse> 
     <text id="myInitials"  x="50%"  y="50%"  textAnchor="middle" alignmentBaseline="middle" fontStyle="" fontSize="110" >GA
      <tspan dx="5" dy="20" fill="orange">.
      <animate  attributeName="dy" values="10;-23;10" dur="2s" repeatCount="indefinite"/>
     </tspan>
     </text>
     <use xlinkHref="#myInitials" className="copy copy1"></use>
     <use xlinkHref="#myInitials" className="copy copy2"></use>

    </g>
  
   </svg>

            {/* <img
              src="/codingImage7.png"
              alt="HomePage Impressive Image showing an animated person studying on a laptop"
              style={{ width: "470px" }}
              data-tilt
            /> */}
          </div>
        </div>

      </div>
      <div className=" mt-8 lg:mt-0 flex justify-center lg:justify-start relative">
       <NavLink to="/contact"  className="ml-6 p-5 mr-6 border rounded-3xl text-lg hover:text-purple-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-800 relative -top-2 active:-top-0" >Contact Me</NavLink> 
       <NavLink to="/resume" className="ml-6 p-5 border rounded-3xl text-lg hover:text-purple-500  hover:border-purple-500 hover:shadow-2xl  hover:shadow-purple-800 relative -top-2 active:-top-0">View Resume</NavLink> 
      </div>
      </div>



      <div className="mt-10 lg:mt-0">
        <h2 className="text-4xl pt-6 lg:text-6xl text-center">
          LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className=" pl-6 lg:w-1/2 text-lg">
            <p className="lg:pt-20 xl:pt-28 hidden lg:block tracking-widest">
              From the first moment I typed 'Hello, World!' 👨‍💻 into my console,
              I knew I had found my calling in the enchanting world of
              programming. Who knew a simple greeting could lead to such an
              exhilarating adventure? 🌍✨
            </p>
            <p className="pt-7 hidden lg:block tracking-widest">
              And here you are, browsing through my coded portfolio—crafted with
              love ❤️, passion 💪, and a generous amount of caffeine ☕️! After
              overcoming a myriad of hurdles (and a few keyboard-smashing
              moments ⌨️😅), I've finally become fluent in several programming
              languages, including C, C++, Java, and a delightful mix of
              frontend and backend technologies 🛠️.
            </p>
            {/* <p className="pt-7 hidden lg:block">
              Fun fact: I once spent an hour debugging a piece of code only to
              realize I had forgotten a semicolon 😆. It's moments like these
              that keep my love for coding alive and remind me that even the
              tiniest details can make a world of difference—much like finding a
              typo in the resume! 📄🔍
            </p> */}
            <p className="pt-7 hidden lg:block tracking-widest">
              So, buckle up! 🚀 You’re about to embark on a journey through my
              projects, where creativity meets code 🎨💻 and where every bug 🐛
              is just a feature in disguise.
            </p>

            <p className="pt-6 lg:hidden tracking-widest">
              From typing my first 'Hello, World!' 👨‍💻 to building projects,
              programming has been an exciting journey! 🌟
            </p>
            <p className="pt-4 lg:hidden tracking-widest">
              Welcome to my portfolio—created with passion ❤️, a touch of
              caffeine ☕️, and some memorable coding challenges 🧩.
            </p>
            <p className="pt-4 lg:hidden tracking-widest">
              I've worked with languages like C, C++, Java, and a mix of
              frontend and backend tools 🛠️.
            </p>
            <p className="pt-4 lg:hidden tracking-widest">
              So, dive in! 🚀 Here, creativity meets code, and every bug 🐛 has
              its story.
            </p>
          </div>
          <div className=" lg:w-1/2  border-blue-500 mt-4 xl:mt-0 flex justify-center">
            <img src="/funnyBoyImage.png"
            alt="HomePage animated image of a person looking happy and dancing"
             data-tilt></img>
          </div>
        </div>
      </div>
    </div>
  );
}
