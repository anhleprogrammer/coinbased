import React from "react";
import logo from "../assets/logo.png";
import wlogo from "../assets/white-logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const setDark = props.setDark;
  const dark = props.dark === true ? "dark" : false;
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/" || location.pathname === "/nft") setDark(true);
  else setDark(false);
  return (
    <div className={dark}>
      <div className="flex justify-center nav-bar p-2 border-b-slate-200 border-solid border bg-white dark:bg-black dark:border-none sticky top-0">
        <div className="nav-container flex items-center justify-between w-10/12 mx-auto py-2 sm:py-0 sm:mx-0 sm:w-full md:justify-around">
          <Link to="/" className="logo flex items-center gap-4 font-bold">
            <img className="logo-img w-12 " src={dark ? wlogo : logo} alt="" />
            <p className="text-indigo-500 dark:text-white ">COINBASED</p>
          </Link>
          <ul className="nav-middle  flex items-center child:text-indigo-500 justify-center sm:gap-0 lg:justify-evenly w-3/6 lg:gap-4 gap-20 dark:text-white">
            <Link to="/market">Market</Link>
            <Link to="/nft">NFT</Link>
          </ul>
          <div className="2xl:w-1/3 md:hidden nav-right flex gap-4 items-center justify-center w-1/5">
            <button className="  text-indigo-500 border-indigo-500 border-solid border-2 rounded-full py-2 w-1/2 dark:text-white">
              Sign in
            </button>
            <button className="  bg-indigo-500 hover:bg-indigo-700 text-white border-2  border-indigo-500 hover:border-indigo-700  py-2 rounded-full w-1/2">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
