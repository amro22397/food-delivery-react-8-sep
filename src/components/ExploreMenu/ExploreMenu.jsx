import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <div className="explore-menu-list flex bg-red-100 rounded-3xl mt-4">
        {menu_list.map((item, index) => {
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" />
                    <p className={category===item.menu_name? "text-active":""} src={item.menu_image}>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
