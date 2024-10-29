import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
export default function RootPage() {
  return (
    <div className="text-white relative bg-black">
      <Header/>
      <Outlet/>  
      <Footer/>
      {/* <WindowWidth/> */}
    </div>
  )
}

// import React from "react";
// import ParticlesBackground from "./ParticlesBackground";
// import HomePageText from "./HomePageText";

// const RootPage = () => {
//   return (
//     <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
//       <ParticlesBackground />
//       {/* <HomePageText /> */}
//     </div>
//   );
// };

// export default RootPage;
