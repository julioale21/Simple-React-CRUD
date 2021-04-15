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
    if (window.confirm("Are you sure that you want to remove?")) {
      setDb((db) => db.filter((item) => item.id !== id));
    } else {
      return;
    }
  };

  const update = (knight: Knight) => {
    let newData: Knight[] = db.map((el) => (el.id === knight.id ? knight : el));

    setDb(newData);
  };

  return (
    <div className="grid grid-cols-2 gap-16 lg:gap-4 mt-6">
      <div className="col-span-2 lg:col-span-1">
        <CrudForm
          create={create}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          update={update}
        />
      </div>
      <div className="col-span-2 lg:col-span-1 mb-12">
        <CrudTable listOfKnights={db} remove={remove} setDataToEdit={setDataToEdit} />
      </div>
    </div>
  );
};

export default CrudApp;
