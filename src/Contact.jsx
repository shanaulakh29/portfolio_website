import React,{useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from '@emailjs/browser'
import {toast, Bounce} from 'react-toastify'

export default function Contact() {
  const [showLeftSectionOfContactPage,setShowLeftSectionOfContactPage]=useState(false)
  const leftSectionContainer = useRef();
  const rightSectionContainer = useRef();
  const innerleftSectionContainer = useRef();
  const nameDiv=useRef();
  const emailDiv=useRef();
  const messageDiv=useRef();
  const serviceId="service_pj179qr";
  const templateId="template_6lcyfn1";
  const publicKey="grVdEAxCPfWVNwLux";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

   const emailRegex= /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;

   useEffect(()=>{
    if(!showLeftSectionOfContactPage){
     let interval1= setTimeout(()=>{
        leftSectionContainer.current.classList.add("left-0")
        rightSectionContainer.current.classList.add("right-0");
      },200)
      let interval2= setTimeout(()=>{
        innerleftSectionContainer.current.classList.remove("lg:hidden")
        innerleftSectionContainer.current.classList.add("block")
      },900)

      return ()=>{
        clearInterval(interval1);
        clearInterval(interval2);
      }
    }
   },[])
   


    function handleSubmit(e){
     e.preventDefault();
     let isNameNotEmpty=name.trim().length>0;
     let isEmailNotEmpty=email.trim().length>0;
    let isValidEmail=emailRegex.test(email);
     let isMessageNotEmpty=message.trim().length>0;
     if( isNameNotEmpty && isEmailNotEmpty && isMessageNotEmpty){
     
      const templateParams={
        from_name:name,
        from_email:email,
        message,
        to_name: "Gurshan Aulakh"
  
      }

      emailjs.send(serviceId, templateId,templateParams, publicKey).then((success)=>{
        console.log("Email sent successfully "+success);
        // alert("Thank you, "+name+", for reaching out! I'll get back to you as soon as possible.")
        toast("Thank you, "+name+", for reaching out! I'll get back to you as soon as possible.",{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          })
        setName('')
        setEmail('')
        setMessage('')
      }).catch((error)=>{
        console.log("Error sending email "+error.message);
        
      })
    }
    
      if(!isValidEmail){
        emailDiv.current.innerHTML="Please enter a valid email";
        emailDiv.current.classList.remove('hidden');
        nameDiv.current.classList.add("block");
      }

      if(!isNameNotEmpty){
        nameDiv.current.classList.remove('hidden');
       nameDiv.current.classList.add("block");
      }else{
        nameDiv.current.classList.add('hidden');
        nameDiv.current.classList.remove("block");
      }
      if(!isEmailNotEmpty){
        emailDiv.current.innerHTML="Email field cannot be empty";
        emailDiv.current.classList.remove('hidden');
       emailDiv.current.classList.add("block");
      }else{
        emailDiv.current.classList.add('hidden');
        emailDiv.current.classList.remove("block");
      }
      if(!isMessageNotEmpty){
        messageDiv.current.classList.remove('hidden');
       messageDiv.current.classList.add("block");
      }else{
        messageDiv.current.classList.add('hidden');
        messageDiv.current.classList.remove("block");
      }   
  }
     
  return (
    <div className="md:min-h-screen md:flex md:items-center md:justify-center relative ">
      <div className=" flex flex-col md:flex-row  md:w-5/6 rounded-xl overflow-hidden">
        <div ref={leftSectionContainer} className=" relative -left-full transition-all duration-500 md:w-1/2 text-center lg:text-left lg:pl-6  bg-purple-800">
        <div ref={innerleftSectionContainer} className="lg:hidden">
            <h1 className="text-5xl pt-10">Let's Connect</h1>
            <p className="pt-6 tracking-widest">
              I'm always open to new opportunities and collaborations. Whether
              you have an exciting project in mind, want to discuss potential
              job opportunities, or simply connect, I'd love to hear from you.
            </p>
            <div className="pt-4 sm:mb-8 pb-6 ">
              <Link to="https://github.com/shanaulakh29" className="hover:scale-110 inline-block hover:shadow-xl hover:shadow-slate-300 mr-10">
            <GitHubIcon style={{fontSize:"40px"}}/>
            </Link>
            <Link to="https://www.linkedin.com/in/shan-aulakh-183a94192/" className="hover:scale-110 inline-block hover:shadow-xl hover:shadow-slate-300 ">
            <LinkedInIcon style={{fontSize:"40px"}}/>
            </Link>
            </div>
            </div>
        </div>
        <div ref={rightSectionContainer} className=" w-full  relative -right-full transition-all duration-500 md:w-1/2 bg-slate-500 p-10">
          <form onSubmit={handleSubmit} >
            <label htmlFor="name" className="block tracking-widest">
              Name
            </label>
            <input
            id="email"
              type="text" value={name} name="name" onChange={({target})=>{
                setName(target.value);
              }}
              className="block outline-none  bg-slate-500 border-b-2 border-sky-200 w-full pt-2 focus:border-b-white"
             autoFocus={false}
            />
            <div ref={nameDiv} className="text-red-700 hidden">Name field cannot be empty</div>
             

            <label htmlFor="email" className="mt-8 block tracking-widest">
              Email
            </label>
            <input
            regex="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              type="email" value={email} name="email" id="email" onChange={({target})=>{
                setEmail(target.value);
              }}
              className="block outline-none bg-slate-500 border-b-2 w-full pt-2 border-sky-200 focus:border-b-white "
            />
           <div ref={emailDiv} className="text-red-700 hidden">Email field cannot be empty</div>

            <label htmlFor="message" className="mt-8 block tracking-widest">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={({target})=>{
                setMessage(target.value);
              }}
            
              className="w-full outline-none bg-slate-500 border-b-2 pt-2 border-sky-200 focus:border-b-white "
            ></textarea>
            <div ref={messageDiv} className="text-red-700 hidden">Message field cannot be empty</div>
            

            <button className="float-end w-32 border rounded-full mt-6 h-10 hover:bg-white hover:text-slate-500 transition-all duration-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
