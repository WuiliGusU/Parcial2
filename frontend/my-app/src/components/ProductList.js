import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import ProductForm from './ProductForm';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const saveProduct = async (product) => {
    try {
      if (isEditing) {
        await axios.put(`/api/products/${currentProduct.id}`, product);
      } else {
        await axios.post('/api/products', product);
      }
      setIsEditing(false);
      setCurrentProduct(null);
      loadProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const editProduct = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  return (
    <div>
      <h2>{isEditing ? 'Editar Producto' : 'Registrar Producto'}</h2>
      <ProductForm onSave={saveProduct} product={currentProduct} />
      <h2>Lista de Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct} />
        ))
      )}
    </div>
  );
}

export default ProductList;
