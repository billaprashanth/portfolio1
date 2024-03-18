import "./App.css";
import Navbar from "./Navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
