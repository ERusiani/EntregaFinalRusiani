import React from "react";

export const Contacto = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg px-6 py-4">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <div className="text-lg mb-4">
          <p>
            <span className="font-bold text-rose-500">Correo electrónico:</span>{" "}
            <a href="mailto:ysc.art@gmail.com" className="text-blue-500 hover:underline">ysc.art@gmail.com</a>
          </p>
          <p>
            <span className="font-bold text-rose-500">Teléfono:</span>{" "}
            <span className="text-rose-500 font-semibold">+549(221)155698798</span>
          </p>
          <p>
            <span className="font-bold text-rose-500">Instagram:</span>{" "}
            <a href="https://www.instagram.com/ysc.arte/" className="text-blue-500 hover:underline">@ysc.arte</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
