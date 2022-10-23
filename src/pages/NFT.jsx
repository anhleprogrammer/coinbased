import { React, useEffect, useState } from "react";
import { ape, rat, letsWalk, doge, doodle } from "../utils/main";
import NFTCard from "../components/NFTCard";
import axios from "axios";
function NFT() {
  const [nftCollection, setCollection] = useState([]);
  useEffect(() => {
    const data = async () => {
      const apeData = await ape();
      const ratData = await rat();
      const doodleData = await doodle();
      const dogeData = await doge();

      setCollection([apeData, dogeData, doodleData, ratData]);
    };
    data();
  }, []);

  return (
    <div>
      <div className="flex gap-4 p-16">
        {nftCollection.map((nft) => {
          return <NFTCard nft={nft} />;
        })}
      </div>
    </div>
  );
}

export default NFT;
