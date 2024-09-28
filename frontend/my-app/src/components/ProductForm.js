import React, { useState } from 'react';

function ProductForm({ onSave, product }) {
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [available, setAvailable] = useState(product ? product.available : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, available };
    onSave(newProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Descripción:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Disponible:</label>
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ProductForm;