import React, { useContext } from "react";
import { toast } from "react-toastify";
import ItemCount from "./ItemCount";
import { CartContext } from "./Context/CartContext";

export const ItemDetail = ({ item }) => {
  const { id, nombre, descripcion, precio, stock, isOnDiscount } = item;
  const { addItem, removeItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item, quantity);
    toast("El item fue agregado correctamente");
  };

  const onRemove = (quantity) => {
    removeItem(item.id, quantity);
    toast("El item fue eliminado correctamente");
  };

  const imageURL = `/img/producto${id}.webp`;

  return (
    <div className="max-w-md mx-auto my-8 md:my-4">
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{nombre}</div>
          <div className="text-center">
            <img
              src={imageURL}
              alt={nombre}
              className="w-15 h-auto mb-2 mx-auto"
            />
          </div>
          <p className="text-gray-700 text-base">Precio: ${precio}</p>
          <p className="text-gray-700 text-base">
            {isOnDiscount ? "¡En oferta!" : "Precio regular"}
          </p>
          <p className="text-gray-700 text-base">
            {stock > 0 ? "Disponible en stock" : "Agotado"}
          </p>
          <p className="text-gray-700 text-base">{descripcion}</p>
          <ItemCount stock={stock} initial={0} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
