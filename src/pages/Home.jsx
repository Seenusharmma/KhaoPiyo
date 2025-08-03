import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";

const Home = () => {
  let { cate, setCate, input } = useContext(dataContext);

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
      {!input?<div className="w-full overflow-x-auto lg:overflow-x-hidden">
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
      </div>:null}
      
      
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

    </div>
  );
};

export default Home;
