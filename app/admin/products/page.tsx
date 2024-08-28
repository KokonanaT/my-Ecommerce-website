"use client"
import { useState } from 'react';
import { useProductAdmin } from '../../context/ProductAdminContext';

export default function AdminProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useProductAdmin();
  const [NewProduct, setNewProduct] = useState({ name: '', price: 0, image: '' });

  const handleAddProduct = () => {
    addProduct(NewProduct);
    setNewProduct({ name: '', price: 0, image: '' });
  };

  return (
    <div>8
      <h1 className="text-2xl font-bold mb-8">Manage Products</h1>
      
      <div className="mb-6">
        <h2 className="text-xl mb-4">Add New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={NewProduct.name}
          onChange={(e) => setNewProduct({ ...NewProduct, name: e.target.value })}
          className="border p-2 mr-4"
        />
        <input
          type="number"
          placeholder="Product Price"
          value={NewProduct.price}
          onChange={(e) => setNewProduct({ ...NewProduct, price: parseFloat(e.target.value) })}
          className="border p-2 mr-4"
        />
        <input
          type="text"
          placeholder="Product Image URL"
          value={NewProduct.image}
          onChange={(e) => setNewProduct({ ...NewProduct, image: e.target.value })}
          className="border p-2 mr-4"
        />
        <button onClick={handleAddProduct} className="bg-blue-500 text-white py-2 px-4">Add Product</button>
      </div>
      
      <h2 className="text-xl mb-4">Existing Products</h2>
      <div className="space-y-4">
        {products.map(product => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>${product.price}</p>
            <div className="flex space-x-4 mt-4">
              <button 
                onClick={() => updateProduct(product.id, { name: 'Updated Product', price: product.price + 10 })}
                className="bg-yellow-500 text-white py-2 px-4"
              >
                Update
              </button>
              <button 
                onClick={() => deleteProduct(product.id)} 
                className="bg-red-500 text-white py-2 px-4"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
