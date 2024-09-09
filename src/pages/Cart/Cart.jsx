import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import CartItem from '../../components/CartItem/CartItem'

const Cart = () => {


  let { cart, clearCart, total} = useContext(StoreContext);

  const [appear, setAppear] = useState(false);

  const navigate = useNavigate();
  
  cart = JSON.parse(localStorage.getItem("cartData"));

  return (
    
    <div className='cart py-2 relative'>
      {!appear? "" : 
      <div className="clear-cart-message
      fixed left-0 right-0 px-auto py-5 w-[45%]
      mx-auto">
      <h2 
      className='text-xl font-sans text-gray-800'>Are you sure you want to clear all cart items?</h2>
      <div className="clear-message-btns">
      <button onClick={() => {
        clearCart();
        setAppear(false)
      }}>YES</button>
      <button onClick={() => setAppear(false)}>NO</button>
      </div>
    </div>
      }


      <div className="go-to-food-menu mb-8
      max-xl:flex max-xl:justify-center max-xl:items-center " id='go-to-food-menu'>
        <HashLink to='/#food-display'><button className='
        bg-orange-500 text-white font-sans px-4 py-[3px] rounded-3xl text-xl'>Go To Menu</button></HashLink>
      
      </div>

      <div className="cart-items font-sans flex flex-row justify-between items-start
      max-xl:flex-col max-xl:items-center">

        <div className="cart-items-left
        max-xl:mb-10
        max-sm:w-[75%] max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:mx-auto">
        <span className='text-orange-900 text-2xl' style={{fontFamily: 'Tahoma'}}>Your orders :</span>
        <div class='cart-list flex flex-col mt-3 overflow-y-auto overflow-x-hidden h-[300px] w-[500px]'>
          {cart.map((item)=>{
            return <CartItem item={item} key={item._id} />
            })}
            </div>
        </div>

        <div class='w-[48%]
        max-xl:w-[50%]
        max-lg:w-[70%]
        max-md:w-[85%]
        max-sm:w-full'>
        <h2 className='text-2xl font-sans font-bold pb-3'>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p class='sub-total'>$ {total}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>$ {total===0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>$ {total===0 ? 0 : total + 2}</b>
          </div>

          <div className="cart-total-btns">
          <button className='bg-orange-500 text-white px-4 py-1 rounded-md mt-3 font-mono text-lg tracking-widest'
          onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          <button className='bg-red-600 text-white px-4 py-1 rounded-md mt-3 font-mono text-lg tracking-widest'
          onClick={() => setAppear(true)}>CLEAR CART</button>
          </div>
        </div>
      </div>

      <div className="cart-promo-code px-3 py-10 flex flex-row justify-center my-10">
        
        <div className="cart-promocode w-[60%] flex flex-col
        max-lg:w-[90%]" >
          <div>
            <p class='font-mono'>If you have promocode.. Enter</p>
            <div className="cart-promocode-input
            bg-gray-300 px-1 py-1 rounded-md mt-3 flex flex-row justify-between">
              <input type="text" placeholder='promo code'
              className='text-white bg-gray-300 px-2 py-1' id='promo-input' />
              <button className='bg-gray-800 text-white px-2 py-1 rounded-md font-sans'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
