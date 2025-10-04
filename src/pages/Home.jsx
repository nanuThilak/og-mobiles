import React from "react";
import M from "./M";
import Oppo from "./Oppo";
import R from "./R";
import Vivo from "./Vivo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center my-20 p-5 gap-20">
      <h1 className="text-3xl font-bold">OG MOBILES</h1>
      <div>
        <input
          type="text"
          className="border-2 rounded-2xl py-2 px-5"
          placeholder="search Mobiles..."
        />
        <button className="border-2 text-gray-600 bg-white py-2 px-5 rounded-2xl">
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row gap-20 mt-10" >
      <Link to={"/vivo"}>
        <img
          src="/vivol.png"
          alt="logo"
          width={"200px"}
          className="h-[200px]"
        />
      </Link>
      <Link to={"/oppo"}>
        <img src="/oppol.png" alt="" width={"200px"} className="h-[200px]" />
      </Link>
      <Link to={"/realme"}>
        <img src="/rl.png" alt="logo" width={"200px"} className="h-[200px]" />
      </Link>
      <Link to={"/mi"}>
        <img src="/readml.png" alt="mi" width={"200px"} className="h-[200px]" />
      </Link>
      </div>
    </div>
  );
};

export default Home;
