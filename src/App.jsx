import { React, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark}>
      <Router>
        <div className="bg-indigo-500 p-2 text-white justify-center flex dark:text-black">
          <p className="dark:text-black">
            Get up to $200 for getting started →
          </p>
        </div>
        <Navbar dark={dark} setDark={setDark} />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
