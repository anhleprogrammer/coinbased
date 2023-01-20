import React from "react";

function NFTCard(props) {
  const nft = props.nft;
  return (
    <div className="w-1/4 relative lg:text-xs">
      <img className="w-full h-full rounded-lg" src={nft.openSea.imageUrl} />
      <div className="absolute bottom-4 left-4 flex flex-col text-white lg:left-0">
        <span>{nft.openSea.collectionName}</span>
        <span className="lg:hidden">Floor: {nft.openSea.floorPrice} ETH</span>
      </div>
    </div>
  );
}

export default NFTCard;
