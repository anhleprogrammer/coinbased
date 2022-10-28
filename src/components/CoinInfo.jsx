import { React, useState, useEffect } from "react";
import { exportedMethods } from "../utils/main.js";
import axios from "axios";
const url = exportedMethods.historicalChart2();

function CoinInfo() {
  const [historicalData, setHistoricalData] = useState();
  useEffect(() => {
    try {
      async function getData() {
        const coinData = await axios.get(url);
        setHistoricalData(coinData.data);
        return coinData;
      }
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(historicalData);

  return <div>CoinInfo</div>;
}

export default CoinInfo;
