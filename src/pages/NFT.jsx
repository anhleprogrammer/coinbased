import { React, useEffect, useState } from "react";
import { exportedMethods, address } from "../utils/apiURL";
import NFTCard from "../components/NFTCard";
import chevronL from "../assets/chevron-l.png";
import chevronR from "../assets/chevron-r.png";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
function NFT() {
  const [nftCollection, setCollection] = useState([]);
  const [slide, setSlide] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const data = async () => {
      const ape = await exportedMethods.getNFTData(address.ape);

      const doge = await exportedMethods.getNFTData(address.doge);

      const lilpud = await exportedMethods.getNFTData(address.lilpud);

      const punk = await exportedMethods.getNFTData(address.punk);

      const rat = await exportedMethods.getNFTData(address.rat);

      const doodle = await exportedMethods.getNFTData(address.doodle);
      const azuki = await exportedMethods.getNFTData(address.azuki);

      const shark = await exportedMethods.getNFTData(address.shark);

      window.addEventListener("resize", setWindowSize(getWindowSize()));

      setCollection([
        [ape, doge, lilpud, doodle],
        [punk, rat, shark, azuki],
      ]);
    };
    data();
  }, []);

  const filterCollection = () =>
    nftCollection && nftCollection[slide] ? nftCollection[slide] : null;

  return (
    <div className="bg-gray-900 h-screen items-center">
      <div className="flex justify-center">
        {" "}
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-800 text-5xl m-12 lg:text-3xl">
          Explore, collect, and sell NFTs
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-4 p-16 font-bold">
          {filterCollection()
            ? filterCollection().map((nft) => {
                return <NFTCard windowSize={windowSize} nft={nft} />;
              })
            : ""}
        </div>
        {/* <div className="flex gap-4 p-16 font-bold lg:hidden">
          {filterCollection()
            ? filterCollection().map((nft) => {
                return <NFTCard nft={nft} />;
              })
            : ""}
        </div> */}
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
