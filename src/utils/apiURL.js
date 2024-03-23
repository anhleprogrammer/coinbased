import axios from "axios";

const exportedMethods = {
  historicalChart(coinId, days) {
    return `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
  },
  coinInfo(id) {
    return `https://api.coingecko.com/api/v3/coins/${id}`;
  },
};
export { exportedMethods };
