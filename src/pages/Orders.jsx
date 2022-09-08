import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const url = "https://fakestoreapi.com/products";
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
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },

    {
      name: "title",
      selector: (row) => row.title.substr(0, 20),
      sortable: true,
    },
    {
      name: "price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "image",
      selector: (row) => (
        <img alt="img" width={50} height={50} src={row.image} />
      ),
     },
  ];
   
  return (
    <div className=" my-auto h-full px-10 rounded-sm flex flex-col justify-center">
      <DataTable
        title="Order list"
        pagination
        columns={columns}
        data={orders}
        defaultSortFieldId={1}
       />
    </div>
  );
};

export default Orders;
