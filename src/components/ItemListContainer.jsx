import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();

        const categoriasQuery = collection(db, "categorias");
        const categoriasSnapshot = await getDocs(categoriasQuery);
        const categoriasData = categoriasSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCategorias(categoriasData);


        if (id) {
          const productosQuery = query(collection(db, "productos"), where("categoria", "==", parseInt(id)));
          const productosSnapshot = await getDocs(productosQuery);
          const productosData = productosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          productosData.sort((a, b) => a.nombre.localeCompare(b.nombre));
          productosData.forEach(producto => {
            producto.imagen = `/public/img/producto${producto.id}.webp`;
          });
          setProductos(productosData);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <div className="grid grid-cols-3 gap-4">
        {categorias.map(categoria => (
          <Link key={categoria.id} to={`/category/${categoria.id}`}>
            <div className={`p-4 rounded shadow-md hover:bg-rose-500 ${id === categoria.id ? 'bg-rose-500 text-white' : 'bg-gray-200'}`}>
              <h2 className="text-lg font-semibold">{categoria.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>
      {id && (
        <div>
          <h2 className="text-2xl font-bold mt-10">{productos.length > 0 ? `Productos de la categoría` : 'No hay productos disponibles en esta categoría'}</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {productos.map(producto => (
              <Link key={producto.id} to={`/item/${producto.id}`}>
                <div className="bg-gray-200 p-4 rounded shadow-md">
                  <img src={`/img/producto${producto.id}.webp`} alt={producto.nombre} className="w-full h-auto mb-2" />
                  <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
