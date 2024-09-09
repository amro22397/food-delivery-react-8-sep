import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download 
    text-5xl font-bold mx-auto py-20 w-full flex flex-col justify-center text-center
    max-sm:text-4xl' id='app-download'>
        <p className='pb-7 font-mono'>Download our latest <br /> Tomato App</p>
        <div className="app-download-platforms flex flex-row justify-center
        max-sm:flex-col max-sm:items-center max-sm:gap-4">
            <img src={assets.play_store} alt=""
            className='max-sm:h-[100px] max-sm:w-[300px]' />
            <img src={assets.app_store} alt=""
            className='max-sm:h-[100px] max-sm:w-[300px]' />
        </div>
    </div>
  )
}

export default AppDownload
