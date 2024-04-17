import React from 'react';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import { CartPage } from "./components/CartPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './components/CheckoutPage';
import Contacto from './components/Contacto';

function App() {
  return (
    <CartProvider>   
      <Router>
        <div className="App">
          <ToastContainer/>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path= "/checkout" element={<CheckoutPage />} />
            <Route path= "/contacto" element={<Contacto />} />
            
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
