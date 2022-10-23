import axios from "axios";
// const axios = require("axios");
const apiURL =
  "https://eth-mainnet.g.alchemy.com/nft/v2/demo/getContractMetadata";

const ape = async () => {
  const queryParams = {
    contractAddress: `0x892848074ddeA461A15f337250Da3ce55580CA85`,
  };
  const params = new URLSearchParams(queryParams);
  const data = await axios.get(`${apiURL}/?${params}`);
  return data.data.contractMetadata;
};

const rat = async () => {
  const queryParams = {
    contractAddress: `0x394E3d3044fC89fCDd966D3cb35Ac0B32B0Cda91`,
  };
  const params = new URLSearchParams(queryParams);
  const data = await axios.get(`${apiURL}/?${params}`);
  return data.data.contractMetadata;
};
const letsWalk = async () => {
  const queryParams = {
    contractAddress: `0x0825F050E9B021A0E9de8CB1fb10b6C9F41e834C`,
  };
  const params = new URLSearchParams(queryParams);
  const data = await axios.get(`${apiURL}/?${params}`);
  return data.data.contractMetadata;
};
const doodle = async () => {
  const queryParams = {
    contractAddress: `0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e`,
  };
  const params = new URLSearchParams(queryParams);
  const data = await axios.get(`${apiURL}/?${params}`);
  return data.data.contractMetadata;
};
const doge = async () => {
  const queryParams = {
    contractAddress: `0xF4ee95274741437636e748DdAc70818B4ED7d043`,
  };
  const params = new URLSearchParams(queryParams);
  const data = await axios.get(`${apiURL}/?${params}`);
  return data.data.contractMetadata;
};
export { ape, rat, letsWalk, doge, doodle };
