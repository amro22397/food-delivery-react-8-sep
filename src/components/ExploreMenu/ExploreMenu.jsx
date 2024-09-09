import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <div className="explore-menu-list flex bg-red-100 rounded-3xl mt-4
      hover:overflow-auto overflow-hidden">
        {menu_list.map((item, index) => {
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt=""
                    className='w-[85%] h-[85%] object-contain
                    max-xl:w-[55px] max-xl:h-[55px] border-none
                    max-lg:w-[50px] max-lg:h-[50px]'
                     />
                    <p 
                    className={`${category===item.menu_name? "text-active":""} mt-1
                    max-lg:text-xs`}
                     src={item.menu_image}>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
