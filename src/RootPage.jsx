import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WindowWidth from './WindowWidth.jsx'
import InitialDesign from './InitialDesign.jsx'
import { ToastContainer} from 'react-toastify';

export default function RootPage() {
  const [isVisible, setIsVisible]=useState(false);
  useEffect(()=>{
    let intervalId=setTimeout(()=>{
      setIsVisible(true)
    },3300)
    return ()=>{
      clearInterval(intervalId)
    }
  },[])
  return (
<div className=" relative bg-black text-gray-200">
{isVisible?<> <Header />
  <ToastContainer />
  <Outlet/>  
  <Footer/>
   <WindowWidth/>
   </>:<InitialDesign/>}
 
</div> 
  )
}
{/* <div className=" relative bg-black text-gray-200">
<InitialDesign/> */}

