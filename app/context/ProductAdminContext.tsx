"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductAdminContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: number, updatedProduct: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
}

const ProductAdminContext = createContext<ProductAdminContextProps | undefined>(undefined);

export const useProductAdmin = () => {
  const context = useContext(ProductAdminContext);
  if (!context) {
    throw new Error('useProductAdmin must be used within a ProductAdminProvider');
  }
  return context;
};

export const ProductAdminProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (newProduct: Product) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const updateProduct = (id: number, updatedProduct: Partial<Product>) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, ...updatedProduct } : product
    ));
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ProductAdminContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductAdminContext.Provider>
  );
};
