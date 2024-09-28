import React from 'react';

function Product({ product, onDelete, onEdit }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} USD</p>
      <p>{product.available ? "Disponible" : "No Disponible"}</p>
      <button onClick={() => onEdit(product)}>Editar</button>
      <button onClick={() => onDelete(product.id)}>Eliminar</button>
    </div>
  );
}

export default Product;
