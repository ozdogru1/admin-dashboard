import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/comments";
  const fetchData = () => {
    axios
      .get(url)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "order",
      selector: (row) => row.body.substr(0,50),
    },
  ];
 
  return (
    <div className=" my-auto h-full px-10 rounded-sm  ">
      <DataTable
        title="Order list"
        pagination
        columns={columns}
        data={orders}
       />
    </div>
  );
};

export default Orders;
