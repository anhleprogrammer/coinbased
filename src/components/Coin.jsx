import React from "react";
import { useNavigate } from "react-router-dom";

function Coin(props) {
  const coin = props.coin;
  const navigate = useNavigate();
  const formatCash = (n) => {
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };
  const convertValue = (val) => {
    return val.toLocaleString(undefined, { minimumFractionDigits: 2 });
  };
  const move$ = (str) => {
    str = str + "";
    if (str.includes("-")) str = str.slice(1);
    return Number(str);
  };
  return (
    <div
      className={
        coin.name !== "Dogecoin"
          ? "dark coin-container hover:bg-slate-100 flex justify-between items-center border-solid border-b py-2 cursor-pointer"
          : "coin-container rainbow hover:bg-red-100 flex justify-between items-center border-solid border-b py-2 cursor-pointer"
      }
      onClick={() => navigate(`${coin.id.toLowerCase()}`)}
    >
      <div className="left-values flex gap-4 items-center">
        {" "}
        <img className="w-8 h-8" src={coin.image} alt="" />
        <div className="coin-name">
          <p>{coin.name}</p>
          <p className="text-slate-500 ">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="right-values flex items-center justify-center w-4/5 child:w-1/5 lg:w-1/2">
        <p className="coin-price ">${convertValue(coin.current_price)}</p>
        <p
          className={
            coin.price_change_24h > 0
              ? "text-green-500 lg:hidden"
              : "text-red-500 lg:hidden"
          }
        >
          {coin.price_change_24h < 0
            ? "-$" + convertValue(move$(coin.price_change_24h))
            : "$" + convertValue(coin.price_change_24h)}
        </p>
        <p
          className={
            coin.price_change_percentage_24h > 0
              ? "text-green-500 lg:hidden"
              : "text-red-500 lg:hidden"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className="lg:hidden">${formatCash(coin.market_cap)}</p>
        <p className="flex justify-center lg:hidden">
          <button className=" bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded">
            Trade
          </button>
        </p>
      </div>
    </div>
  );
}

export default Coin;
