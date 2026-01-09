import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-48">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="text-3xl">
            <span className="text-blue-700">Auction</span>
            <span className="font-bold text-yellow-400">Gallery</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auctions</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How it works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="bg-slate-300 p-2 rounded-full cursor-pointer">
            <IoNotificationsOutline size={25}/>
          </div>
          <div className="avatar ">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
