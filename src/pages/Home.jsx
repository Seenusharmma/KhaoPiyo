import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "all") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {/* Menu Section  */}
      {!input ? (
        <div className="w-full overflow-x-auto lg:overflow-x-hidden">
          <div className="flex lg:flex-wrap gap-4 justify-start items-center px-4 py-4 min-w-max lg:justify-center">
            {categories.map((item, index) => (
              <div
                key={index}
                className="min-w-[140px] w-[140px] h-[150px] flex flex-col items-center justify-center gap-2 p-5 text-[20px] font-semibold text-gray-500 hover:text-black transition-transform duration-300 hover:scale-110 flex-shrink-0"
                onClick={() => filter(item.name)}
              >
                {item.image}
                <span className="w-full text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* carousal section  */}

      {/* card  */}
      <div className="w-full flex flex-wrap justify-center items-center gap-5 px-5 pb-8">
        {cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      {/* Cart Section */}
      <div
        className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-red-500 text-[18px] font-semibold">
            Cart Items
          </span>
          <RxCross2
            className="w-[20px] h-[20px] text-red-500 text-[18px] font-bold cursor-pointer hover:text-red-700"
            onClick={() => setShowCart(false)}
          />
        </header>
        {/* Add to cart items  */}
        <Card2/>
      </div>
    </div>
  );
};

export default Home;
