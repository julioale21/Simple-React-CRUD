import React from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Knight } from "./types";

const initialDb: Knight[] = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fenix",
  },
];

const CrudApp: React.FC = () => {
  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm />
      <CrudTable listOfKnights={initialDb} />
    </div>
  );
};

export default CrudApp;
