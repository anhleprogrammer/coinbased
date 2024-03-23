import axios from "axios";
const apiKey = "3CiAM9p2CyxR4ph9rymuSC9BhO2ywyBx";
const apiURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getContractMetadata`;

const exportedMethods = {
  async getNFTData(address) {
    try {
      const queryParams = {
        contractAddress: address,
      };
      const params = new URLSearchParams(queryParams);
      const data = await axios.get(`${apiURL}/?${params}`);
      console.log(data.data.contractMetadata);
      return data.data.contractMetadata;
    } catch (e) {
      console.log(e);
    }
  },

  historicalChart(coinId, currency, days) {
    return `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`;
  },
  coinInfo(id) {
    return `https://api.coingecko.com/api/v3/coins/${id}`;
  },
};
export { exportedMethods };
