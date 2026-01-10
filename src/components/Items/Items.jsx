import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { IoIosHeartEmpty } from "react-icons/io";

const Items = ({ handleFavorite, favorite, handleRemoveFavorite }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // console.log(items)
  return (
    <div className="pt-36 px-48 bg-slate-100 min-h-screen">
      <h1 className="text-3xl">
        <span className="text-blue-950 font-semibold">Active Auctions:</span>{" "}
        {items.length} items
      </h1>
      <p className="pt-2 pb-2.5">Discover and bid on the extraordinary items</p>
      <div className="items-container flex gap-4">
        <div className="left-container bg-white rounded-t-2xl w-[70%]">
          <div className="grid grid-cols-9 items-center gap-4 p-6 border-b border-slate-500 rounded-t-2xl font-semibold tracking-wider">
            <div className="col-span-4">Items</div>
            <div className="col-span-2">Current Bid</div>
            <div className="col-span-2">Time left</div>
            <div className="col-span-1">Bid now</div>
          </div>

          {items.map((item) => (
            <Item key={item.id} item={item} handleFavorite={handleFavorite} favorite={favorite} />
          ))}
        </div>
        <div className="right-container bg-white rounded-2xl w-[30%] h-[90%]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2 border-b border-slate-500 w-full py-5 text-[22px] text-blue-900 font-semibold">
              <IoIosHeartEmpty /> Favorite Items
            </div>

            {/* 2. CONDITIONAL RENDERING HERE */}
            <div className="flex flex-col w-full p-4 gap-2">
              {favorite.length === 0 ? (
                <div className="flex flex-col justify-center items-center py-10">
                  <span className="text-xl font-semibold">
                    No favorites yet
                  </span>
                  <span className="text-center text-sm text-slate-600 mt-2">
                    Click the heart icon on any item <br /> to add it to your
                    favorites
                  </span>
                </div>
              ) : (
                favorite.map((fav, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-300 p-2">
                    <img
                      src={fav.image}
                      className="w-10 h-10 rounded object-cover m-2"
                      alt=""
                    />
                    <span className="font-semibold text-sm m-2">{fav.title}</span>
                    <span className="text-blue-700 font-bold m-2">
                      ${fav.currentBidPrice}
                    </span>
                    <button className="m-2" onClick={() => handleRemoveFavorite(fav.id)}>❌</button>
                  </div>
                ))
              )}
            </div>

            <div className="py-4 text-center border-t border-slate-500 w-full mt-4">
              Total Bids Amount: $
              {favorite.reduce((preSum, currentSum) => preSum + currentSum.currentBidPrice, 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
