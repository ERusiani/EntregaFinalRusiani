import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { CartWidget } from "./CartWidget";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const db = getFirestore();
    const categoriasCollection = collection(db, "categorias");
    getDocs(categoriasCollection).then((snapshot) => {
      const categoriesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCategories(categoriesData);
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
      setShowCategories(false);
    }
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="bg-rose-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mr-20 bg-center">
          <Link to="/">
            <img src="/img/resizelogo.webp" alt="LogoDeYSC" />
          </Link>
        </div>
        <ul className="flex space-x-4 justify-end">
          <li ref={categoriesRef}>
            <button className="text-white text-xl" onClick={toggleCategories}>Categorías</button>
            {showCategories && (
              <ul className="absolute bg-white text-xl w-[20%] rounded-lg border border-gray-300">
                {categories.map(categoria => (
                  <li key={categoria.id}>
                    <button className="hover:underline block w-full">
                      <Link to={`/category/${categoria.id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{categoria.nombre}</Link>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link to="/contacto" className="text-white text-xl">Contacto</Link>
          </li>
          <li>
            <NavLink to='/cart'><CartWidget /></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

