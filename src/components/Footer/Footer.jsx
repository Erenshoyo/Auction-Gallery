import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 bg-white">
      <footer className="flex flex-col justify-center items-center gap-4 bg-base-200 text-base-content rounded p-24">
        <div className="text-center"> 
          <p className="text-3xl flex gap-0">
            <span className="text-blue-700">Auction</span>
            <span className="font-bold text-yellow-400">Gallery</span>
          </p>
          <p className="text-lg m-0">Bid. Win. Own.</p>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auctions</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How to work</a>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by AuctionHub
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
