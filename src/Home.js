import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Products from "./components/Products";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Hero />
      {/* <Category /> */}
      <Products />
      <Footer />
    </>
  );
};

export default Home;
