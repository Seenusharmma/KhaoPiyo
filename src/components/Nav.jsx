import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

const Nav = () => {
  let { input, setInput, cate, setCate } = useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
    setCate(newlist);
  }, [input]);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8 ">
      {/* logo  */}
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-red-600" />
      </div>

      {/* Form Section */}
      <form
        className="w-[45%] h-[60px] bg-white flex items-center px-5  gap-5 rounded-md  shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-red-600 w-[20px] h-[20px] " />
        <input
          type="text"
          placeholder="Search your fav foods..."
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Cart section  */}
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
        <span className="absolute top-1 right-3 text-red-600 font-bold text-[18px]">
          0
        </span>
        <RiShoppingBasket2Line className="w-[30px] h-[30px] text-red-600 " />
      </div>
    </div>
  );
};

export default Nav;
