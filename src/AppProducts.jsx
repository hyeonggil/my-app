import './App.css';
import React, { useState } from 'react';
import Products from './components/Products';

function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
        {showProducts && <Products />}
        <button onClick={() => setShowProducts(!showProducts)}>
          Toggle Products
        </button>
    </div>
  );
}

export default AppProducts;
