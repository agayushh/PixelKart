import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/collection" element={Collection} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
        <Route path="/product/:productId" element={Product} />
        <Route path="/cart" element={Cart} />
        <Route path="/place-order" element={PlaceOrder} />
        <Route path="/orders" element={Orders} />
      </Routes>
    </div>
  );
}

export default App;
