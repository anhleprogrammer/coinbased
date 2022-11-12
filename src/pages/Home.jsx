import React from "react";
import video from "../assets/video.mp4";
function Home() {
  return (
    <div className="flex items-center home-container text-white">
      <video className="w-screen" loop autoPlay muted>
        <source className="w-fit h-fit" src={video} type="video/mp4" />
      </video>
      <div className="absolute lg:w-1/2 w-1/3 left-1/2 gap-4 flex flex-col justify-center items-start sm:top-auto sm:left-1/2 sm:-translate-x-1/2 ">
        <p className="lg:text-3xl text-6xl">The future of blockchain is here</p>
        <p className="text-xl sm:text-sm sm:hidden">
          Over 108 million people and businesses trust us to buy, sell, and
          manage crypto.
        </p>
        <div className="flex m:gap-12 gap-6 w-full sm:flex-col">
          <input
            className="s:w-20"
            type="email"
            placeholder="satoshinakamoto@gmail.com"
            className="sm:w-full w-1/2 text-black rounded p-2 w-1/2 active:border-indigo-700 border-solid border-2"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-700
            text-white py-2 px-4 rounded-lg "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
