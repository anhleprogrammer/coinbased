import { React, useState, useEffect } from "react";
import { exportedMethods } from "../utils/alchemy.js";
import axios from "axios";

function CoinInfo(props) {
  const id = props.id;
  const url = exportedMethods.historicalChart(id, "usd", 7);
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
  console.log(historicalData.prices); // an array with 169 subarrays, each subarray represent data point for 1 day

  return <div>{id}</div>;
}

export default CoinInfo;
