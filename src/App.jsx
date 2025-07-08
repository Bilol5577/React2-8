import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import Products from "./components/Products";
import RetailSolutions from "./components/RetailSolutions";
import Consultation from "./components/Consultation";

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Hero />
      <Features />
      <Comparison />
      <Products />
      <RetailSolutions />
      <Consultation />
    </div>
  );
};

export default App;