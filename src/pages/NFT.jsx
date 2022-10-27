import { React, useEffect, useState } from "react";
import { exportedMethods } from "../utils/main";
import NFTCard from "../components/NFTCard";
import chevronL from "../assets/chevron-l.png";
import chevronR from "../assets/chevron-r.png";

function NFT() {
  const [nftCollection, setCollection] = useState([]);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const data = async () => {
      try {
        const apeData = await exportedMethods.ape();
        const ratData = await exportedMethods.rat();
        const doodleData = await exportedMethods.doodle();
        const dogeData = await exportedMethods.doge();
        const punkData = await exportedMethods.punk();
        const walk = await exportedMethods.letsWalk();
        const nyolinData = await exportedMethods.nyolin();
        const cyberData = await exportedMethods.cyber();
        const womanData = await exportedMethods.woman();
        const birdData = await exportedMethods.bird();
        const azukiData = await exportedMethods.azuki();
        const sharkData = await exportedMethods.shark();

        setCollection([
          [apeData, dogeData, doodleData, ratData],
          [punkData, walk, nyolinData, cyberData],
          [womanData, birdData, sharkData, azukiData],
        ]);
      } catch (e) {
        console.log(e);
      }
    };
    data();
  }, []);

  const filterCollection = () => {
    return nftCollection && nftCollection[slide] ? nftCollection[slide] : null;
  };
  const filterResult = filterCollection();
  console.log(filterResult);

  return (
    <div className="bg-black h-screen items-center">
      <div className="flex justify-center">
        {" "}
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-800 text-5xl m-12">
          Explore, collect, and sell NFTs
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-4 p-16 font-bold">
          {filterResult
            ? filterResult.map((nft) => {
                return <NFTCard nft={nft} />;
              })
            : ""}
        </div>
        <button className="absolute top-1/2 left-10 -translate-y-6">
          <img
            className="w-12 "
            src={chevronL}
            onClick={() => {
              if (slide > 0) setSlide(slide - 1);
              else setSlide(nftCollection.length - 1);
            }}
          />
        </button>

        <button className="absolute top-1/2 right-10  -translate-y-6">
          <img
            className="w-12"
            src={chevronR}
            onClick={() => {
              if (slide < 2) setSlide(slide + 1);
              else setSlide(0);
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default NFT;
