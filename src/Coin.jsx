import React from "react";

function Coin(props) {
  const coin = props.coin;
  const index = props.index;
  console.log(coin);
  return (
    <div className="coin-container">
      <div className="coin-container-left">
        {" "}
        <p>{index + 1}</p>
        <div className="coin-img-name">
          {" "}
          <img className="coin-img" src={coin.image} alt="" />
          <p>{coin.name}</p>
        </div>
      </div>
      <div className="coin-container-right">
        <p>${coin.current_price}</p>
        <p
          className={
            coin.price_change_percentage_24h > 0
              ? "positive-change"
              : "negative-change"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p>{coin.total_volume}</p>
        <p>${coin.market_cap}</p>
      </div>
    </div>
  );
}

export default Coin;
