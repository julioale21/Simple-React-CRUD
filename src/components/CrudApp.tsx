/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Knight } from "./types";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";

interface Error {
  err: boolean;
  status: string;
  statusText: string;
}

const CrudApp: React.FC = () => {
  const [db, setDb] = useState<Knight[]>([]);
  const [dataToEdit, setDataToEdit] = useState({} as Knight);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const url: string = "http://localhost:5000/knights";
  const api = helpHttp();

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb([]);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const create = (data: Knight) => {
    let options = { body: data, headers: { "content-type": "application/json" } };

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
        setError(null);
      } else {
        setError(res);
      }
    });
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
        {loading && <Loader />}
        {error && <Message message={`Error ${error.status}:  ${error.statusText}`} />}
        {db.length > 0 && (
          <CrudTable listOfKnights={db} remove={remove} setDataToEdit={setDataToEdit} />
        )}
      </div>
    </div>
  );
};

export default CrudApp;
