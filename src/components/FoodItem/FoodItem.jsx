import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({item, showAddedCartMessage}) => {

    const [itemCount, setItemCount] = useState(0)
    const {cartItems,addToCart,removeFromCart, saveCart} = useContext(StoreContext);

    const {_id, name, price, description, image} = item;
    
  return (
    <div className='food-item flex flex-col items-center justify-center text-center px-0 pb-8 pt-4 '>
      <div className="food-item-img-container w-[90%] relative">
        <img className='food-item-image rounded-md pb-2 max-sm:w-full' src={image} alt="" />
        <img className='add rounded-3xl absolute bottom-4 right-2 w-10 h-10 cursor-pointer hover:opacity-85
            ' onClick={() => {
                addToCart(item, _id); showAddedCartMessage()}} src={assets.add_icon_white} />

      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating flex flex-col items-center pb-2">
            <p className='text-xl font-sans tracking-wide pb-1'>{name}</p>
            <img className='' src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc px-0">{description}</p>
        <p className="food-item-price text-lg font-bold font-sans tracking-widest">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
