import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MocksAsync from '../utils/MocksAsync.json';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundProducto = MocksAsync.productos.find(prod => prod.id === parseInt(id));
      setProducto(foundProducto);
      setLoading(false);
    }, 2000); // Simulando carga de datos asincrónica
  }, [id]);

  if (loading) return <h1>Cargando...</h1>;
  if (!producto) return <h1>Producto no encontrado</h1>;

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-gray-100 p-8 rounded-md shadow-md">
        <img src={`/img/${producto.imagen}`} alt={producto.nombre} className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">{producto.nombre}</h2>
        <p className="text-lg text-gray-600 mb-4">{producto.descripcion}</p>
        <p className="text-2xl font-semibold text-rose-500">${producto.precio}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;

