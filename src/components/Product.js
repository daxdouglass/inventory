import React, { useState } from 'react';

const Product = ({ product, updateStock, deleteProduct }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [stock, setStock] = useState(product.stock);

  const handleUpdate = () => {
    updateStock(product.id, stock);
    setIsEditing(false);
  };

  return (
    <div>
      <span>{product.name}</span>
      {isEditing ? (
        <>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(parseInt(e.target.value))}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span> - Stock: {product.stock}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Product;
