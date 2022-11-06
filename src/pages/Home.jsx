import React from "react";
import video from "../assets/video.mp4";
function Home() {
  return (
    <div className="flex items-center home-container text-white m:w-screen">
      <video className="w-fit m:w-screen" loop autoPlay muted>
        <source className="w-fit h-fit" src={video} type="video/mp4" />
      </video>
      <div className="absolute left-1/2 gap-6 flex flex-col justify-center xl:w-1/3 xl:top-1/3 items-start">
        <p className="xs:text-xl s:text-4xl l:text-6xl ">
          The future of blockchain is here
        </p>
        <p className="m:text-2xl text-4xl xs:text-sm   ">
          Over 108 million people and businesses trust us to buy, sell, and
          manage crypto.
        </p>
        <div className="flex m:gap-12 xs:gap-6 w-full">
          <input
            className="s:w-20"
            type="email"
            placeholder="satoshinakamoto@gmail.com"
            className="w-1/2 text-black rounded p-2 w-1/2 active:border-indigo-700 border-solid border-2"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-700
            text-white m:py-2 m:px-4 rounded-lg xs:px-2 xs:text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
