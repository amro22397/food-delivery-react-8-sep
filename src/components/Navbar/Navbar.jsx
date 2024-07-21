import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react'


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar py-0 px-16 my-0 flex bg-white w-[100%] items-center justify-between'>
     <Link to='/'><img src={assets.logo} alt=""
     className='h-8' /></Link> 

      <ul className='navbar-menu flex flex-row'>
        <Link  to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}> 
        <li style={{fontFamily: 'Trebuchet MS'}}><a href="#header">Home</a></li></Link>
        <li onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}><a href="#explore-menu">Menu</a></li>
        <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}><a href="#app-download">Mobile App</a></li>
        <li onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}><a href="#footer">Contact Us</a></li>
      </ul>

      <div className='navbar-right flex flex-row items-center'>
        <img src={assets.search_icon} alt=""
        className='cursor-pointer' />
        <div className="navbar-search-icon px-4 flex flex-row">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
        </div>
        <button onClick={() => setShowLogin(true)} 
        className='sign-in-button px-3 py-1 rounded-3xl'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
