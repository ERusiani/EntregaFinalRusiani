import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

export const CartPage = () => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext);

  const handleAddItem = (item) => {
    // Llama a la función addItem con el producto y la cantidad 1
    addItem(item, 1);
  };

  const handleRemoveItem = (item) => {
    removeItem(item.id, 1);
  };

  const handleClearCart = () => {
    // Llama a la función clearCart para limpiar todo el carrito
    clearCart();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <span>{item.item.nombre} - Quantity: {item.quantity}</span>
            <div>
              <button onClick={() => handleAddItem(item.item)} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2">+</button>
              <button onClick={() => handleRemoveItem(item.item)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mr-2">-</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <button onClick={handleClearCart} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded mr-2">Clear Cart</button>
        <Link to="/checkout">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};
