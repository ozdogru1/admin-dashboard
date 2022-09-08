import React from "react";
import { info } from "../constants/info";
const Ecommerce = () => {
  return (
    <div className="flex justify-center flex-wrap  ">
      {info.map((item) => (
        <div className="w-36   p-10 flex flex-col justify-center items-center bg-secondary-dark-bg text-white rounded m-5" key={item.id}>
          <span className="p-3 rounded-full bg-white text-black text-center ">{item.icon}</span>
          <p className="mt-3 mb-3 opacity-75">{item.title}</p>
          <p className="mb-3">{item.quantity}</p>
          <p className={item.total <0 ? "text-red-700" : "text-blue-400"}>{item.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Ecommerce;
