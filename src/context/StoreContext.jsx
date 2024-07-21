import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState,useEffect } from "react";

export const StoreContext = createContext(null)

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartData") || '[]')
const StoreContextProvider = (props) => {

    const [cart, setCart] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cart));
    }, [cart])

    const [itemAmount, setItemAmount] = useState(0);

    const [total, setTotal] = useState(0);

    const [cartItems, setCartItems] = useState({});

    
    
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
      localStorage.setItem("amount", itemAmount)
    }
  }, [cart]);

  

    const addToCart = (item, _id) => {
        const newItem = { ...item, amount: 1 };
        // check if the item is already in the cart
        const cartItem = cart.find((item) => {
          return item._id === _id;
        });
        // if cart item is already in the cart
        if (cartItem) {
          const newCart = [...cart].map((item) => {
            if (item._id === _id) {
              return { ...item, amount: cartItem.amount + 1 };
            } else {
              return item;
            }
          });
          setCart(newCart);
        } else {
          setCart([...cart, newItem]);
          
        }
    }

    const removeFromCart = (_id) => {
        const newCart = cart.filter((item) => {
            return item._id !== _id;
          });
          setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
      };


     

    const increaseAmount = (_id) => {
        const cartItem = cart.find((item) => item._id === _id);
        addToCart(cartItem, _id);
      };



      const decreaseAmount = (_id) => {
        const cartItem = cart.find((item) => {
          return item._id === _id;
        });

        if (cartItem) {
          const newCart = cart.map((item) => {
            if (item._id === _id) {
              return { ...item, amount: cartItem.amount - 1 };
            } else {
              return item;
            }
          });
          setCart(newCart);
        }
    
        if (cartItem.amount < 2) {
          removeFromCart(_id);
        }
      };


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseAmount,
        increaseAmount,
        cart, clearCart, total, itemAmount,
        

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider