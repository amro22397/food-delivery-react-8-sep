import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react'
import { LuMenu } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";





const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
    <div className='navbar py-4 my-0 xl:max-w-[90%] max-w-[80%] max-lg:max-w-[90%]
     mx-auto bg-white items-center justify-between flex relative'>

      
     <Link to='/'><img src={assets.logo} alt=""
     className='h-8' /></Link> 

      <ul className='navbar-menu flex flex-row max-lg:hidden'>
        <Link  to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}> 
        <li style={{fontFamily: 'Trebuchet MS'}}><a href="#header">Home</a></li></Link>
        <li onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}><a href="#explore-menu">Menu</a></li>
        <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}><a href="#app-download">Mobile App</a></li>
        <li onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}><a href="#footer">Contact Us</a></li>
      </ul>

      <div className='navbar-right flex flex-row items-center'>
        <div className="flex flex-row items-center max-lg:hidden">
        <IoSearch className='cursor-pointer text-2xl' />
        <div className="navbar-search-icon px-4 flex flex-row">
          <Link to='/cart'>
          <FaCartShopping className='text-2xl'/>
          </Link>
        </div>
        </div>
        
        <button onClick={() => setShowLogin(true)} 
        className='sign-in-button px-3 py-1 rounded-3xl
        max-sm:hidden bg-orange-600 hover:bg-orange-700
        active:bg-orange-800 transition-all duration-300
        text-white'>Sign In</button>

        <LuMenu onClick={() => setShowSideBar(true)}
        className='ml-3 text-3xl cursor-pointer hover:text-gray-700
        lg:hidden'/>
      </div>

      

    </div>

    {showSideBar && (
      <div id="sidebar" className="flex flex-col fixed bg-orange-200 w-[250px] top-0 right-0
      mx-auto justify-start items-center h-[100%] lg:hidden overflow-hidden z-50
     p-4">
       <IoMdCloseCircleOutline onClick={() => setShowSideBar(false)}
       className='absolute top-2 right-2 text-2xl hover:text-gray-700
       cursor-pointer'/>
 
       <ul className='navbar-menu flex flex-col justify-center items-center
       mt-14'>
 
         <Link  to='/' onClick={()=>{
          setMenu("home");
          setShowSideBar(false);
         }} className={menu==="home" ? "active" : ""}> 

         <li style={{fontFamily: 'Trebuchet MS'}}><a href="#header">Home</a></li></Link>
         <li onClick={()=>{
          setMenu("menu");
          setShowSideBar(false);
         }} className={menu==="menu" ? "active" : ""}><a href="#explore-menu">Menu</a></li>

         <li onClick={()=>{
          setMenu("mobile-app");
          setShowSideBar(false);
         }} className={menu==="mobile-app" ? "active" : ""}><a href="#app-download">Mobile App</a></li>

         <li onClick={()=>{
          setMenu("contact-us");
          setShowSideBar(false);
         }} className={menu==="contact-us" ? "active" : ""}><a href="#footer">Contact Us</a></li>
         
         </ul>
         
         <div className="flex flex-row mt-5 ml-[21.5px] mb-3">
         <IoSearch className='cursor-pointer text-2xl' />
        <div className="navbar-search-icon px-4 flex flex-row">
          <Link to='/cart'
          onClick={() => setShowSideBar(false)}>
          <FaCartShopping className='text-2xl'/>
          </Link>
        </div>

             </div>

             <button onClick={() => setShowLogin(true)} 
        className='sign-in-button px-3 py-1 rounded-3xl bg-white border-gray-800 border-2
        hover:bg-orange-100 active:bg-orange-200 hover:text-black
        sm:hidden'>Sign In</button>
 
 </div>
    )}

</>
  )
}

export default Navbar
