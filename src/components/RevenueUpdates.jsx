import React from "react";

const RevenueUpdates = () => {
  return (
    <div className="bg-secondary-dark-bg w-[60%] m-auto px-10 py-5 text-white rounded flex ">
      <div className="w-1/2  ">
        <h1>Revenue Updates</h1>
        <p>
          $ 93,124 <span className="opacity-75">Budget</span>
        </p>
        <p>
          $ 46,234 <span className="opacity-75">Expense</span>
        </p>
      </div>
      <div className="w-1/2  ">Graph</div>
    </div>
  );
};

export default RevenueUpdates;
