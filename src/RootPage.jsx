import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
// import WindowWidth from './WindowWidth'
export default function RootPage() {
  return (
    <div className="text-white bg-black">
      <Header/>
      <Outlet/>  
      <Footer/>
      {/* <WindowWidth/> */}
    </div>
  )
}

