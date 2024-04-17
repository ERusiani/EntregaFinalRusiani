import React, { useContext } from "react";
import Cart from "../assets/Cart.svg";
import { CartContext } from "./Context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center">
      <img src={Cart} alt="Cart" className="w-4 h-auto mr-2" />
      <span>{totalProducts}</span>
    </div>
  );
};

export default CartWidget;