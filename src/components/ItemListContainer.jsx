import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MocksAsync from '../utils/MocksAsync.json';

const ItemListContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (id) {
        const filteredData = MocksAsync.productos.filter(producto => producto.categoria === id);
        setData(filteredData);
      } else {
        setData(MocksAsync.productos);
      }
      setLoading(false);
    }, 2000); 
  }, [id]);

  const addToCart = (producto) => {

  };

  if (loading) return <h1>Cargando...</h1>;

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 mt-8">
      {data.map(producto => (
        <div key={producto.id} className="bg-gray-100 p-4 rounded-md shadow-md">
          <Link to={`/item/${producto.id}`}>
            <img src={`/img/${producto.imagen}`} alt={producto.nombre} className="w-full h-auto mb-2" />
            <h2 className="text-lg font-bold">{producto.nombre}</h2>
            <p className="text-sm text-gray-500">{producto.descripcion}</p>
            <p className="text-sm font-semibold text-rose-500">${producto.precio}</p>
          </Link>
          <button onClick={() => addToCart(producto)} className="bg-rose-500 text-white font-semibold py-2 px-4 rounded-md mt-2">
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;


