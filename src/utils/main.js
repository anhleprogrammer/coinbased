const axios = require("axios");
const apiURL =
  "https://eth-mainnet.g.alchemy.com/nft/v2/demo/getContractMetadata";

const exportedMethods = {
  async ape() {
    const queryParams = {
      contractAddress: `0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },

  async rat() {
    const queryParams = {
      contractAddress: `0x394E3d3044fC89fCDd966D3cb35Ac0B32B0Cda91`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async letsWalk() {
    const queryParams = {
      contractAddress: `0x0825F050E9B021A0E9de8CB1fb10b6C9F41e834C`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async doodle() {
    const queryParams = {
      contractAddress: `0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async doge() {
    const queryParams = {
      contractAddress: `0xF4ee95274741437636e748DdAc70818B4ED7d043`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },

  async punk() {
    const queryParams = {
      contractAddress: `0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async nyolin() {
    const queryParams = {
      contractAddress: `0xB16dfd9AaAF874FCb1dB8a296375577c1bAa6F21`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async bear() {
    const queryParams = {
      contractAddress: `0xc99c679C50033Bbc5321EB88752E89a93e9e83C5`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async cyber() {
    const queryParams = {
      contractAddress: `0x892848074ddeA461A15f337250Da3ce55580CA85`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },

  async bird() {
    const queryParams = {
      contractAddress: `0x23581767a106ae21c074b2276D25e5C3e136a68b`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async woman() {
    const queryParams = {
      contractAddress: `0xe785E82358879F061BC3dcAC6f0444462D4b5330`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async azuki() {
    const queryParams = {
      contractAddress: `0xED5AF388653567Af2F388E6224dC7C4b3241C544`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
  async shark() {
    const queryParams = {
      contractAddress: `0x78a5E2B8c280FA5580fBE1e1ed546183f959d305`,
    };
    const params = new URLSearchParams(queryParams);
    const data = await axios.get(`${apiURL}/?${params}`);
    return data.data.contractMetadata;
  },
};

export { exportedMethods };
