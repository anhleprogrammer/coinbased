import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";
function App() {
  const [coins, setCoin] = useState([]);
  const [searchVal, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        console.log(Array.isArray(res.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const filterCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <h2> Search</h2>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          type="text"
        />
      </div>
      <div className="label">
        <div className="label-left">
          <p>#</p>
          <p>Coin</p>
        </div>
        <div className="label-right">
          <p>Price</p>
          <p>24h volume change</p>
          <p>24h volume</p>
          <p>Market Cap</p>
        </div>
      </div>
      {filterCoin.map((coin, index) => {
        return <Coin key={coin.id} coin={coin} index={index} />;
      })}
    </div>
  );
}

export default App;
