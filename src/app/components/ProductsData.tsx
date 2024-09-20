'use client'; // Ensure this is at the top to make the component a Client Component

import { Product } from '@/lib/drizzle';
import React, { useState, useEffect } from 'react';

const ProductsData = () => {
  const [products, setProducts] = useState<Product[]>([]); // Holds fetched products
  const [error, setError] = useState<string | null>(null); // Error state

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setProducts(result.data); // Assuming your API returns { data: Product[] }
    } catch (err) {
      setError((err as Error).message); // Capture the error message
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, []); // Empty dependency array to run once

  if (error) return <p>Error: {error}</p>; // Display an error state if fetching fails

  return (

    <div className='overflow-auto h-56'>
      {/* Display products */}
      <ul className="mt-5">
        {products.map((product) => (
          <li key={product.id} className="border p-2 my-2 px-6 rounded bg-gray-100">
            {product.id}: <span className='mr-3'></span> {product.typeofproduct} <span className='mr-3'></span> {product.detailofproduct}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsData;
