import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup w-[400px] px-4 py-3 rounded-md fixed top-[15%] left-0 right-0
    mx-auto z-50 max-sm:w-[380px]
    '>
        <form className="login-popup-container">
            <div className="login-popup-title flex flex-row justify-between items-center pb-3">
                <h2 className='text-xl font-sans font-bold'>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon}
                className='h-4 cursor-pointer' alt="" />
            </div>
            <div className="login-popup-inputs flex flex-col">
                {currState==="Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                <input type="email"  placeholder='Your Email' required/>
                <input type="password" placeholder='Password' />
            </div>
            <button className='bg-orange-400 text-white
            tracking-wide px-3 py-1 rounded-3xl mt-2 hover:bg-gray-700 hover:text-white '>
                {currState==="Sign Up" ? "Create account" : "Login"}</button>
            <div className="login-popup-condition flex flex-row pt-4 pb-2">
                
                {currState==="Login"
                ? <></> 
                : <><input type="checkbox" required
                className='mr-2'/> <p className='font-mono'>By continuing I agree</p></> }
                
            </div>
            {currState==="Login" 
            ?<p className='font-sans mt-[-12px]'> Create new account? <span className='hover:underline cursor-pointer'
            onClick={()=>setCurrState("Sign Up")}> Click here</span></p> 
            :<p className='font-sans'> Already have account? <span className='hover:underline cursor-pointer'
            onClick={()=>setCurrState("Login")}> Login here</span></p>
            }
        </form>
      
    </div>
  )
}

export default LoginPopup
