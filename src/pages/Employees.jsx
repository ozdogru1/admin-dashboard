import DataTable from "react-data-table-component";
import { emplooye } from "../constants/info";
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
    name: "salary",
    selector: (row) => row.salary,
    sortable:true
  },
  {
    name: "age",
    selector: (row) => row.age,
    sortable:true
  },
];

const Employees = () => {
  return (
    <div className="  h-full px-10 rounded-sm flex flex-col justify-center">
      <DataTable columns={columns} data={emplooye} pagination defaultSortFieldId={1}/>
    </div>
  );
};

export default Employees;
