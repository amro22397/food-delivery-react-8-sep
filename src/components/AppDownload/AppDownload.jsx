import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download 
    text-5xl font-bold mx-auto py-20 w-full flex flex-col justify-center text-center' id='app-download'>
        <p className='pb-7 font-mono'>Download our latest <br /> Tomato App</p>
        <div className="app-download-platforms flex flex-row justify-center">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
