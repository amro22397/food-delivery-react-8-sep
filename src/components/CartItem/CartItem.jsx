import React from 'react'
import './CartItem.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const CartItem = ({item}) => {

    const { removeFromCart, clearCart, 
        decreaseAmount, increaseAmount, } = useContext(StoreContext);

        const {_id, name, price, image, amount} = item;

  return (
    <div class='cart-item flex flex-row items-center px-4 justify-between my-3 mr-[120px] w-[95%]'>
      <div className="cart-item-right flex flex- items-center">
      <img src={image} alt=""
      className='w-16 h-16 rounded-full' />
      <div className="item-details ml-6 ">
        <h2 className='text-lg font-sans text-red-600'>{name}</h2>
        <p className='text-sm font-sans font-bold'>$ {price}</p>
      </div>
      </div>
      <div className="item-btns flex flex-row items-center">
      <i class="fa-solid fa-circle-plus
      text-gray-500 hover:text-gray-600"
      onClick={() => increaseAmount(_id)}></i>
        <span>{amount}</span>
        <i class="fa-solid fa-circle-minus
         text-gray-500 hover:text-gray-600 mr-5"
         onClick={() => decreaseAmount(_id)}></i>
         <i class="fa-solid fa-circle-xmark
      text-red-500 hover:text-red-600 cursor-pointer"
      onClick={() => removeFromCart(_id)}></i>
      </div>
    </div>
  )
}

export default CartItem
