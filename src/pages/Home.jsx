import React from "react";
function Home() {
  return (
    <div className="flex items-center home-container text-white">
      <div className="bg-gray-900 h-screen w-screen"></div>
      <div className="absolute lg:w-1/2 w-1/2 left-1/3 gap-4 flex flex-col justify-center items-start sm:top-auto sm:left-1/2 sm:-translate-x-1/2 ">
        <p className="lg:text-xl text-6xl">Lorem ipsum dolor sit</p>

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
