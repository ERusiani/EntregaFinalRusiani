import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="bg-rose-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mr-20">
          <Link to="/">
            <img src="/img/resizelogo.webp" alt="LogoDeYSC" />
          </Link>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <img src="/src/assets/search-3076.svg" alt="Search" height={15} width={35} />
          <form className="bg-white p-2 h-[20%] w-full rounded-lg">
            <input type="text" />
          </form>
        </div>
        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-4 justify-end">
            <li>
              <button className="text-white text-xl" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
              {showCategories && (
                <ul className="absolute bg-white text-xl w-[20%]">
                <li>
                      <button className="hover:underline">
                        <Link to="/category/PortaSahumerios">Porta Sahumerios</Link>
                      </button>
                </li>
                <li>
                      <button className="hover:underline">
                        <Link to="/category/Bandejas">Bandejas</Link>
                      </button>
                </li>
                </ul>
              )}
            </li>
            <li><button className="text-white text-xl"><Link to="/">Productos</Link></button></li>
            <li><button className="text-white text-xl">Contacto</button></li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;