import React from "react";

const Navbar = () => {
  return (
    <div className="border-b-2 border-amber-100 fixed top-0 w-full h-fit z-1">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home page</a>
              </li>
              <li>
                <a href="/vivo">Vivo</a>
              </li>
              <li>
                <a href="/oppo">Oppo</a>
              </li>
              <li>
                <a href="/realme">RealMe</a>
              </li>
              <li>
                <a href="/mi">RedMi</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="md:flex gap-5 hidden">
            <a href="/">
              <p className=" cursor-pointer">Home</p>
            </a>
            <a href="/vivo">
              <p className=" cursor-pointer">Vivo</p>
            </a>
            <a href="/oppo">
              <p className=" cursor-pointer">Oppo</p>
            </a>
            <a href="/realme">
              <p className=" cursor-pointer">Realme</p>
            </a>
            <a href="/mi">
              <p className=" cursor-pointer">Redmi</p>
            </a>
               <a href="/about">
              <p className=" cursor-pointer">About</p>
            </a>
               <a href="/contact">
              <p className=" cursor-pointer">Contact</p>
            </a>
          </div>

         
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
