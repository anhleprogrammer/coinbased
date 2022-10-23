import React from "react";
import video from "../assets/video.mp4";
function Home() {
  return (
    <div className="home-container">
      <video className="w-full" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="flex-col absolute text-white right-20 bottom-80 w-1/3">
        {" "}
        <p className="text-6xl w-2/3 mb-12">The future of money is here</p>
        <p className="text-4xl">
          Over 103 million people and businesses trust us to buy, sell, and
          manage crypto.
        </p>
        <div className="mt-12">
          <input
            type="email"
            placeholder="anhledangcapthegioi@gmail.com"
            className="text-black rounded p-2 w-1/2 active:border-indigo-700 border-solid border-2"
          />
          <button className="bg-indigo-500 hover:bg-indigo-700  text-white py-2 px-4 rounded-lg ml-6">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
