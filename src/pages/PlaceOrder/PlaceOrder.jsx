import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'


const PlaceOrder = () => {

  const {total} = useContext(StoreContext);


 

  return (
    <form className='place-order flex flex-row justify-between py-10
    max-xl:flex-col max-xl:items-center'>
         <div className='place-order-left h-full w-[50%]
         max-xl:w-[70%]'>
           <p className='title text-3xl font-sans pb-5'>Dilevery Information</p>
           <div className="multi-fields
           max-md:flex max-md:flex-col max-md:w-full">
             <input type="text" placeholder='First name'/>
             <input type="text" placeholder='Last name'/>
           </div>
           <input type="email" name="" id="" placeholder='Email adress' />
           <input type="text" placeholder='Street'/>
           <div className="multi-fields
           max-md:flex max-md:flex-col max-md:w-full">
             <input type="text" placeholder='city' />
             <input type="text" placeholder='state' />
           </div>
           <div className="multi-fields
           max-md:flex max-md:flex-col max-md:w-full">
           <input type="text" placeholder='Zip code' />
           <input type="text" placeholder='Country' />
           </div>
           <input type="text" placeholder='Phone' />
         </div>


       <div className="place-order-right w-[50%]
       max-xl:w-[100%]">
         <div className="cart-total px-3 flex flex-row justify-center my-10">
           <div class='w-[65%]'>
           <h2 className='text-2xl font-sans font-bold pb-3'>Cart Totals</h2>
             <div className="cart-total-details">
             <p>Subtotal</p>
            <p>$ {total}</p>
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


          <div className="flex flex-row justify-start items-center
          max-sm:flex-col max-md:items-start gap-2 my-4">
          <button className='bg-orange-500 py-1 px-4 text-white rounded-md font-mono text-lg tracking-widest
             hover:opacity-90'>PROCEED TO PAYMENT</button>
             <Link to='/cart'><button className='bg-orange-500 py-1 px-4 text-white rounded-md font-mono text-lg tracking-
             hover:opacity-90'>BACK</button></Link>
          </div>
             
             
           </div>
          </div>
       </div>
  </form>
    
  )
}

export default PlaceOrder
