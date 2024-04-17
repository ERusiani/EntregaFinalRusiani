import React, { useState } from "react";

export const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "El nombre es requerido";
    }
    if (!formData.email) {
      errors.email = "El correo electrónico es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "El correo electrónico no es válido";
    }
    if (!formData.address) {
      errors.address = "La dirección es requerida";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(formData);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className={`form-input w-full ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className={`form-input w-full ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
          className={`form-input w-full ${errors.address ? "border-red-500" : ""}`}
        />
        {errors.address && <p className="text-red-500 mt-1">{errors.address}</p>}
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Confirmar pedido</button>
    </form>
  );
};

export default Form;
