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
    const fetchApi = async () => {
      setLoading(true);
      const res = await api.get(url);

      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb([]);
        setError(res);
      }
      setLoading(false);
    };

    fetchApi();
  }, [url]);

  const create = async (data: Knight) => {
    let options = { body: data, headers: { "content-type": "application/json" } };

    const res = await api.post(url, options);

    if (!res.err) {
      setDb([...db, res]);
      setError(null);
    } else setError(res);
  };

  const update = async (data: Knight) => {
    let options = { body: data, headers: { "content-type": "application/json" } };
    let endpoint = `${url}/${data.id}`;

    const res = await api.put(endpoint, options);

    if (!res.err) {
      let newData = db.map((el) => (el.id === data.id ? data : el));

      setDb(newData);
      setError(null);
    } else setError(res);
  };

  const remove = async (id: Knight["id"]) => {
    let confirmDelete = window.confirm("Estas seguro que deseas eliminar?");

    if (confirmDelete) {
      let options = { headers: { "content-type": "application/json" } };
      let endpoint = `${url}/${id}`;

      const res = await api.del(endpoint, options);

      if (!res.err) {
        setDb((db) => db.filter((el) => el.id !== id));
        setError(null);
      } else setError(res);
    }
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

        {!loading && <CrudTable listOfKnights={db} remove={remove} setDataToEdit={setDataToEdit} />}
      </div>
    </div>
  );
};

export default CrudApp;
