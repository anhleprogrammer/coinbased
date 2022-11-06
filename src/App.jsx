import { React, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import NFT from "./pages/NFT";
import CoinInfo from "./pages/CoinInfo";

function App() {
  const [dark, setDark] = useState(true);
  const location = useLocation();

  return (
    <div className={`${dark} w-screen`}>
      {location.pathname === "/market" || location.pathname === "/" ? (
        <div className="bg-indigo-500 p-2 text-white justify-center flex dark:text-black">
          <p className="dark:text-black">
            Get up to $200 for getting started →
          </p>
        </div>
      ) : (
        ""
      )}
      <Navbar dark={dark} setDark={setDark} />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />}>
          <Route path=":id" element={<CoinInfo />} />
        </Route>

        <Route path="/nft" element={<NFT />} />
      </Routes>
    </div>
  );
}

export default App;
