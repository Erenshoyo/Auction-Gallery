import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { IoIosHeartEmpty } from "react-icons/io";

const Items = ({handleFavorite}) => {
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
            <Item key={item.id} item={item} handleFavorite={handleFavorite}/>
          ))}
        </div>
        <div className="right-container bg-white rounded-2xl w-[30%] h-[90%]">
          <div className=" flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2 border-b border-slate-500 w-full py-5 text-[22px] text-blue-900 font-semibold">
              <IoIosHeartEmpty /> Favorite Items
            </div>
            <div className=" flex flex-col justify-center items-center py-10 border-b w-full border-slate-500">
              <span className="text-xl font-semibold">No favorites yet</span> <br />{" "}
              <span className="text-center text-sm text-slate-600">
                Click the heart icon on any item <br /> to add it to your favorites
              </span>
            </div>
            <div className="py-4 text-center">Total Bids Amount: $0000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
