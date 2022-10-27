import React from "react";

function NFTCard(props) {
  const nft = props.nft;
  return (
    <div className="w-1/4 h-1/2 relative">
      <img className="w-full h-full rounded-lg" src={nft.openSea.imageUrl} />
      <div className="absolute bottom-4 left-4 flex flex-col text-white">
        {" "}
        <span>{nft.openSea.collectionName}</span>
        <span>Floor: {nft.openSea.floorPrice} ETH</span>
      </div>
    </div>
  );
}

export default NFTCard;
