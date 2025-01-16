import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import ProductList from "./assets/components/ProductList";

function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
