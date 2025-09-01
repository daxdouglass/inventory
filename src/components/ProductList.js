import React from 'react';
import Product from './Product';

const ProductList = ({ products, updateStock, deleteProduct }) => {
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          updateStock={updateStock}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
