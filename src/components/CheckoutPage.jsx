import React, { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import Form from "./Form";

const CheckoutPage = () => {
  const { cart, clear } = useContext(CartContext);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (formData) => {
    const newOrderId = Math.floor(Math.random() * 1000000);

    console.log("Datos del formulario:", formData);
    console.log("Productos en el carrito:", cart);
    console.log("ID de la compra:", newOrderId);

    setIsOrderConfirmed(true);
    setOrderId(newOrderId);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {isOrderConfirmed ? (
        <div>
          <p className="text-green-600 text-xl mb-4">
            ¡Pedido confirmado! Gracias por tu compra.
          </p>
          <p className="text-lg">
            ID de la compra: <span className="font-semibold">{orderId}</span>
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">Resumen del pedido:</h2>
          <ul className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <li key={index} className="py-2">
                <span className="font-semibold">{item.item.nombre}</span> - Cantidad: {item.quantity}
              </li>
            ))}
          </ul>
          <Form handleSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
