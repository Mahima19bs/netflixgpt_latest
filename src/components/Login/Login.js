import { useState,useRef } from 'react';
import Header from '../Header/Header.js';
import validate from '../../utils/validate.js';

const Login=()=>{
    const [toggle,setToggle]=useState(true);
    const [username,setUsername]=useState("");
    // const [password,setPassword]=useState("");
    // const [email,setEmail]=useState("");
    function handleToggle(){
      setToggle(!toggle);
    }
    const email=useRef(null);
    const password=useRef(null);
    function handleSignUp(){
      validate(username,password,email);
    }
    return(
        <div className="relative">
            <img src="/background.jpg" className="w-full h-screen object-cover"/>
            <div className='absolute inset-0 flex justify-center items-center'>
                
               <form className="bg-black/80 p-8 flex flex-col w-[500px] h-[500px]" onSubmit={(e)=>{e.preventDefault()}}>  
               <h6 className="text-xl text-white mb-4">{toggle ? "Sign Up" : "Sign In"}</h6>
  <inputKavitha1972$$
  
    type="text"
    placeholder="userName"
    className="p-2 m-2"
    onChange={(e)=>{setUsername(e.target.value)}}

  />
 {
  toggle && (
    <input type="text" placeholder="Enter email"  ref={email} className='p-2 m-2' onChange={(e)=>{setEmail(e.target.value)}}
/>
  )
 }
  <input
    type="password"
    ref={password}
    placeholder="Password"
    className="p-2 m-2"
    onChange={(e)=>{setPassword(e.target.value)}}

    
  />

  <button className="p-2 m-2 mt-8 bg-red-600 text-white" onClick={()=>{handleSignUp()}}>
    {toggle ? "Sign Up" : "Sign In"}
  </button>

  <div className="flex justify-between mt-4">
    <label>
      <input type="checkbox" />
      <span className="ml-2 text-white">Remember me</span>
    </label>

    <p className="text-white">Need help?</p>
  </div>

  <div className="mt-9">
    
        {
           toggle ? (
           <>
           <span className="text-white">New to netflix ? </span>
           <span className="text-white font-bold" onClick={()=>handleToggle()}
            >Sign up now</span>
            </>
          ):(
          <>
            <span className="text-white">Already registered ? </span>
            <span className="text-white font-bold" onClick={()=>handleToggle()}>Sign In</span>
            </>
            )
        }
    <p className="mt-5 text-white">This page is protected by google captcha to make sure you are not a bot <span className="text-sky-400">Learn more</span></p>
  </div>
</form>
          </div> 
         
        </div>
    )
}
export default Login;