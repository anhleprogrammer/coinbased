const axios = require("axios");
const apiKey = "3CiAM9p2CyxR4ph9rymuSC9BhO2ywyBx";
const apiURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getContractMetadata`;

const address = {
  ape: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  rat: "0x394E3d3044fC89fCDd966D3cb35Ac0B32B0Cda91",
  doodle: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
  doge: "0xF4ee95274741437636e748DdAc70818B4ED7d043",
  punk: "0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D",
  woman: "0xe785E82358879F061BC3dcAC6f0444462D4b5330",
  azuki: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  shark: "0x78a5E2B8c280FA5580fBE1e1ed546183f959d305",
};

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

  async historicalChart(coinId, currency, days) {
    return `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`;
  },
  historicalChart2(coinId, currency, days) {
    return `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1`;
  },
};
module.exports = { exportedMethods, address };
