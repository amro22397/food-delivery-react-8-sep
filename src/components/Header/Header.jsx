import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header flex flex-col items-start py-[120px] px-[90px]
    max-md:px-10 max-md:py-20 max-sm:py-14

    mt-5' id='header'>
        <h2 className='text-6xl tracking-wide max-md:text-5xl max-sm:text-4xl' style={{fontFamily: 'Cambria'}}>Order your <br/> favourite food here</h2>
        <p className='pt-4 tracking-wide font-sans text-lg'>choose from a list of diverse menu</p>
        <button class='bg-gray-200 px-5 py-2 rounded-3xl mt-4 text-gray-700
        hover:opacity-85'>view menu</button>
    </div>
  )
}

export default Header
