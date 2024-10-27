import React,{useState} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from '@emailjs/browser'
export default function Contact() {
  const serviceId="service_pj179qr";
  const templateId="template_6lcyfn1";
  const publicKey="grVdEAxCPfWVNwLux";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    function handleSubmit(e){
     e.preventDefault();
     const templateParams={
      from_name:name,
      from_email:email,
      message,
      to_name: "Gurshan Aulakh"
  
    }
    emailjs.send(serviceId, templateId,templateParams, publicKey).then((success)=>{
      console.log("Email sent successfully "+success);
      alert("Thank you, "+name+", for reaching out! I'll get back to you as soon as possible.")
      setName('')
      setEmail('')
      setMessage('')
    }).catch((error)=>{
      console.log("Error sending email "+e.message);
    })
    }
  return (
    <div className="md:min-h-screen md:flex md:items-center md:justify-center">
      <div className=" flex flex-col md:flex-row md:justify-center items-center  md:w-5/6 rounded-xl overflow-hidden bg-purple-800">
        <div className="md:w-1/2 text-center lg:text-left lg:pl-6  md:pt-0  mt-8 md:mt-0 ">
            <h1 className="text-5xl">Let's Connect</h1>
            <p className="pt-6 tracking-widest">
              I'm always open to new opportunities and collaborations. Whether
              you have an exciting project in mind, want to discuss potential
              job opportunities, or simply connect, I'd love to hear from you.
            </p>
            <div className="pt-4 sm:mb-8 pb-6">
            <GitHubIcon style={{fontSize:"40px", marginRight:"10px"}}/>
            <LinkedInIcon style={{fontSize:"40px"}}/>
            </div>
   
        </div>
        <div className=" w-full  md:w-1/2 bg-slate-500 p-10">
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="" className="block tracking-widest">
              Name
            </label>
            <input
              type="text" value={name} name="name" onChange={({target})=>{
                setName(target.value);
              }}
              className="block outline-none  bg-slate-500 border-b-2 border-sky-200 w-full pt-2 focus:border-b-white"
             autoFocus={false}
            />
            <label htmlFor="" className="mt-8 block tracking-widest">
              Email
            </label>
            <input
              type="email" value={email} name="email" onChange={({target})=>{
                setEmail(target.value);
              }}
              className="block outline-none bg-slate-500 border-b-2 w-full pt-2 border-sky-200 focus:border-b-white "
    
              
            />
            <label htmlFor="" className="mt-8 block tracking-widest">
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
            <button className="float-end w-32 border rounded-full mt-6 h-10 hover:bg-white hover:text-slate-500 transition-all duration-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
