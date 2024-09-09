import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content bg-gray-600 flex flex-col">
        <div className="footer-content-left flex flex-row my-6 justify-between max-md:items-center mx-6
        max-md:flex-col">
            <div className='flex flex-col w-[30%] max-md:w-full max-md:mb-7'>
            <img src={assets.logo} alt=""
            className='h-10 w-[160px] mb-3' />
            <p className='font-sans text-md text-white '>Lorem Ipsum is simply dummy em Ipsum is simply dummy em Ipsum is simply dummy em Ipsum is simply dummy 
                em Ipsum is simply dummy em Ipsum is simply dummy</p>
            </div>

            <div className="footer-social-icons mr-20 flex flex-row justify-center items-center my-auto w-14 h-10
            max-md:mr-0 max-md:mb-5">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

            <div className="footer-content-right text-white font-sans mr-10 flex flex-col justify-center
            max-md:mr-0 items-center">
                <h2 className='font-sans font-bold'>Get In Touch</h2>
                <ul className='flex flex-col items-center'>
                    <li>+1-232-445-9832</li>
                    <li>contact@amro.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright text-white text-center my-2 font-sans">Copyright <span>{new Date().getFullYear()}</span> Tomato.com - All right</p>
      </div>
    </div>
  )
}

export default Footer
