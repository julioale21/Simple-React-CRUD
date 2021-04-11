import React, { useState } from "react";
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
  const [db, setDb] = useState<Knight[]>(initialDb);
  const [dataToEdit, setDataToEdit] = useState({} as Knight);

  const create = (data: Knight) => {
    setDb([...db, data]);
  };

  const remove = (id: Knight["id"]) => {
    setDb((db) => db.filter((item) => item.id !== id));
  };

  const update = (knight: Knight) => {
    let newData: Knight[] = db.map((el) => (el.id === knight.id ? knight : el));

    setDb(newData);
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm
        create={create}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        update={update}
      />
      <CrudTable listOfKnights={db} remove={remove} setDataToEdit={setDataToEdit} />
    </div>
  );
};

export default CrudApp;
