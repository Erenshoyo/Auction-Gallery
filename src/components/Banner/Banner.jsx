import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-180 bg-size-[auto_1px] bg-center"
      style={{ backgroundImage: "url('./Banner-min.jpg')" }}
    >
      <div className="absolute inset-0 bg-linear-to-l from-black/90 via-black/60 to transparent"></div>
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-48 text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Bid on Unique Items from <br /> Around the world
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg">
          Discover rare collectibles, Luxury goods, and vintage treasures in our
          curated auction
        </p>
        <div>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
//       {/* 1. Gradient Overlay */}
//       {/* This darkens the background so text is readable */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

//       {/* 2. Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl text-white space-y-6">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Bid on Unique Items from <br /> Around the World
//         </h1>

//         <p className="text-gray-300 text-lg md:text-xl max-w-lg">
//           Discover rare collectibles, luxury goods, and vintage treasures in our
//           curated auctions
//         </p>

//         <div>
//           <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg">
//             Explore Auctions
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
