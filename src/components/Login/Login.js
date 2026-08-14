import { useState } from 'react';
import Header from '../Header/Header.js';

const Login=()=>{
    const [toggle,setToggle]=useState(true);
    function handleToggle(){
      setToggle(!toggle);
    }
    return(
        <div className="relative">
            <img src="/background.jpg" className="w-full h-screen object-cover"/>
            <div className='absolute inset-0 flex justify-center items-center'>
                
               <form className="bg-black/80 p-8 flex flex-col w-[500px] h-[500px]">
               <h6 className="text-xl text-white mb-4">{toggle ? "Sign Up" : "Sign In"}</h6>
  <input
    type="text"
    placeholder="Name"
    className="p-2 m-2"
  />
 {
  toggle && (
    <input type="text" placeholder="Enter email" className='p-2 m-2'/>
  )
 }
  <input
    type="password"
    placeholder="Password"
    className="p-2 m-2"

  />

  <button className="p-2 m-2 mt-8 bg-red-600 text-white">
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