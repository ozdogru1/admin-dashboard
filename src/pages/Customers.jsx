import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchData = () => {
    axios
      .get(url)
      .then((res) => setCustomers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(customers);

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable:true
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable:true
    },
    {
      name: "username",
      selector: (row) => row.username,
      sortable:true
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable:true
    },
  ];

  return (
    <div className="my-auto h-full px-10 rounded-2xl flex flex-col justify-center ">
      <DataTable
         columns={columns}
        data={customers}
        defaultSortFieldId={1}
      />
    </div>
  );
};

export default Customers;
