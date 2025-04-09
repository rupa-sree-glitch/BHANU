import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError("Failed to fetch products. Make sure the backend is running.");
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 Product List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
