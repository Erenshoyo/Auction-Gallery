import React from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Item = ({ item, handleFavorite, favorite }) => {
  const {
    id,
    title,
    //description,
    currentBidPrice,
    timeLeft,
    //bidsCount,
    image,
  } = item;

  const isFavorite = favorite?.some((f) => f.id === id);
  return (
    <div className="grid grid-cols-9 gap-4 p-4 items-center border-b border-slate-300 hover:bg-slate-50 transition-colors">
      <div className="col-span-4 flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 rounded-md overflow-hidden bg-slate-200 border-slate-200">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <h3 className="text-md font-medium text-slate-900 leading-snug">
          {title}
        </h3>
      </div>
      <div className="col-span-2 font-semibold text-slate-700">
        ${currentBidPrice}
      </div>
      <div className="col-span-2 font-semibold text-slate-700">
        {timeLeft} left
      </div>
      <div
        onClick={() => !isFavorite && handleFavorite(item)}
        className={`col-span-1 flex justify-center items-center ${
          isFavorite
            ? "text-red-500 cursor-not-allowed"
            : "text-slate-700 cursor-pointer hover:text-red-500"
        }`}
      >
        {isFavorite ? <IoIosHeart size={25} /> : <IoIosHeartEmpty size={25} />}
      </div>
    </div>
  );
};

export default Item;
