import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const arr = [...cartItems];
    const itemnIndex = cartItems.findIndex((data) => data.item == item.id);
    if (itemnIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemnIndex].quantity += 1;
      setCartItems([...arr]);
    }
    setCartItems(arr);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
