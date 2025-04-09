import { useEffect, useState } from "react";
import React from "react";
import ProductList from "./components/ProductList";
import HeroSection from "./components/HeroSection"; // Import Hero Section

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <HeroSection /> {/* Video Hero Section */}
      <h1>Happy birthday baggy boi!!</h1>
      //<ProductList products={data} />
    </div>
  );
};

export default App;
