import React from "react";
import logo from "../assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Market from "../pages/Market";
function Navbar() {
  return (
    <Router>
      <div className="nav-bar border-b-slate-200 border-solid border">
        <div className="nav-container flex justify-between  w-9/12 mx-auto py-2">
          <Link to="/" className="logo w-1/12" href="#pablo">
            <img className="logo-img w-3/4" src={logo} alt="" />
          </Link>
          <ul className="nav-middle flex items-center justify-evenly gap-2 w-1/2">
            <Link to="/market">Markets</Link>
            <Link to="/nft">NFT</Link>

            <Link to="/news">News</Link>
          </ul>
          <div className="nav-right flex gap-4 items-center justify-center w-1/5">
            <button className="text-indigo-500 border-indigo-500 border-solid border-2 rounded-full py-2 w-1/2">
              Sign in
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white border-2  border-indigo-500 hover:border-indigo-700  py-2 rounded-full w-1/2">
              Get started
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
