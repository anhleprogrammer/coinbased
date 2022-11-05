import { React, useEffect, useState } from "react";
import { exportedMethods, address } from "../utils/alchemy";
import NFTCard from "../components/NFTCard";
import chevronL from "../assets/chevron-l.png";
import chevronR from "../assets/chevron-r.png";

function NFT() {
  const [nftCollection, setCollection] = useState([]);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const data = async () => {
      const ape = await exportedMethods.getNFTData(address.ape);

      const doge = await exportedMethods.getNFTData(address.doge);

      const woman = await exportedMethods.getNFTData(address.woman);

      const punk = await exportedMethods.getNFTData(address.punk);

      const rat = await exportedMethods.getNFTData(address.rat);

      const doodle = await exportedMethods.getNFTData(address.doodle);
      const azuki = await exportedMethods.getNFTData(address.azuki);

      const shark = await exportedMethods.getNFTData(address.shark);

      setCollection([
        [ape, doge, woman, doodle],
        [punk, rat, shark, azuki],
      ]);
    };
    data();
  }, []);
  // console.log(nftCollection);

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
              if (slide < 1) setSlide(slide + 1);
              else setSlide(0);
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default NFT;
