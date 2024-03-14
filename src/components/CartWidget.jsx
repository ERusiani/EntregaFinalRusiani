import React from 'react';
import CartIcon from '../assets/Cart.svg';


const CartWidget = () => {
  return (
    <div className="flex">
      <img src={CartIcon} alt="Cart" />
      <span className="text-white">(42)</span>
    </div>
  );
}

export default CartWidget;