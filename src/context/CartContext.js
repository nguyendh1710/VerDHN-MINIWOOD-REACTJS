
import {  createContext, useContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [updateCart, setUpdateCart] = useState([]);
// vi quantity co dính đến 2 component trở lên là Header và Cart nên quantity phải bỏ trong context để chia sẻ dữ liệu chung chứ từng cái riêng rất khó liên kết dữ liệu
  
 


const addItemToCart = (product) => {

  // them key quantity vao object product


  const updateQuantityProduct= {
    ...product, quantity: product.quantity || 1}


 








 // them updateQuantityProduct duoc chon them tam vao bien state tam thoi

 setUpdateCart([...updateCart, updateQuantityProduct]);



}
  const totalItems = updateCart.reduce((total, item) => total + (item.quantity || 0), 0);
  return (
    <CartContext.Provider value={{ updateCart, addItemToCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  const value = useContext(CartContext);
  return value;
};