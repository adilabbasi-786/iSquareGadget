import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import { ShopProvider } from "./ShopContext";
function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
