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
      },
      {
        name: "name",
        selector: (row) => row.name,
      },
    {
      name: "username",
      selector: (row) => row.username,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
  ];

  
  return (
    <div className=" my-auto h-full px-10 rounded-sm  ">
      <DataTable title="Customers list"    columns={columns} data={customers}  defaultSortFieldId={1}/>
    </div>
  );
};

export default Customers;
