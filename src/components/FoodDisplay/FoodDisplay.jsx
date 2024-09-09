import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { HashLink } from 'react-router-hash-link'

const FoodDisplay = ({category}) => {

  const {food_list, total, itemAmount} = useContext(StoreContext);

  const foodDisplay = document.querySelector(".food-display");
  
  const showAddedCartMessage = () => {
       document.querySelector(".added-to-cart-mess").classList.add("show-added-cart-mess");
       setTimeout(() => {
        document.querySelector(".added-to-cart-mess").classList.remove("show-added-cart-mess")
       }, 4000)
  }


  return (
    <div className='food-display pb-5 relative' id='food-display' style={{borderBottom: 'solid rgb(160, 154, 154) 1px'}}>
      <div className="foot-display-header flex flex-row justify-between items-center pt-3 pb-3">
      <h2 class="text-2xl pt-7 font-sans">Top dishes near you ...</h2>

{total === 0? ""
: <HashLink to='/cart#go-to-food-menu'> <button className='bg-orange-400 px-4 py-1 text-white text-2xl rounded-lg mt-5
hover:bg-orange-500'><i class="fa-solid fa-cart-shopping pl-0"></i> ({itemAmount})
</button> </HashLink>}

      </div>

      <div className="food-display-list grid grid-cols-4 my-5 mx-auto justify-center
      max-xl:grid-cols-3
      max-lg:grid-cols-2
      max-sm:grid-cols-1">
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem showAddedCartMessage={showAddedCartMessage}
           item={item} key={item._id} />
          }
         
        })}
      </div>

      <div className="added-to-cart-mess bg-gray-100 w-[30%] px-4 py-2 text-lg text-gray-900 font-sans rounded-md">
      <i class="fa-solid fa-circle-check pr-2 text-green-600"></i>
      Your item has been added to cart <br /> check it up ..
      </div>
    </div>
  )
}

export default FoodDisplay
