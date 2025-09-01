import React, { useState, useEffect } from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateStock = (id, newStock) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: newStock } : product
      )
    );
  };

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        updateStock={updateStock}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default App;
