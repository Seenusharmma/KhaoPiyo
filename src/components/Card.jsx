import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import image1 from "../assets/image1.avif";


const Card = ({ name, image, id, price, type }) => {
  return (
    <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-gray-200 ">
      {/* image  */}
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>
      {/* product name  */}
      <div className="text-2xl font-semibold ">{name}</div>
      {/* price  */}
      <div className="w-full flex justify-between items-center ">
        <div className="text-lg font-bold ">Rs. {price}/-</div>
        {/* category  */}
        <div className="flex justify-center items-center gap-2 text-green-600 text-lg font-semibold">
          {type==="veg"?<LuLeafyGreen />:<GiChickenOven className="text-red-600"/>}
          <span className={`${type==="veg"?"text-green-600":"text-red-600"}`}>{type}</span>
        </div>
      </div>
      <button className="w-full p-4 bg-red-400 hover:bg-red-600 rounded-md font-bold transition-all">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
