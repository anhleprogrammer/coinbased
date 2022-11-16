import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../components/Coin";
import CoinInfo from "../pages/CoinInfo";
import { useParams } from "react-router-dom";

const coinUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

function Market() {
  let { id } = useParams();
  const [coins, setCoin] = useState([]);
  const [searchVal, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(coinUrl)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const filterCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchVal.toLowerCase())
  );
  const displayMarket = () => {
    return (
      <div className="container mx-auto w-2/3">
        <div className="search-container flex items-center justify-center m-12">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="border-indigo-500 active:border-indigo-700 border-solid border-2 rounded w-1/4 p-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-between text-slate-500 mb-2">
          <div className="left-label">
            <p>Name</p>
          </div>
          <div className="right-label flex items-center justify-between w-4/5 child:w-1/5">
            <p>Price</p>
            <p>24h Change</p>
            <p>% Change</p>
            <p>Market Cap</p>
            <p></p>
          </div>
        </div>
        {filterCoin.map((coin, index) => {
          return <Coin key={coin.id} coin={coin} index={index} />;
        })}
      </div>
    );
  };

  return <>{!id ? displayMarket() : <CoinInfo id={id} />}</>;
}

export default Market;
