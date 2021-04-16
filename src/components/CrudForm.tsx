import React, { useEffect, useState } from "react";
import { Knight } from "./types";

const initialForm = {
  id: -1,
  name: "",
  constellation: "",
};

interface Props {
  create: (data: Knight) => void;
  dataToEdit: Knight;
  setDataToEdit: (knight: Knight) => void;
  update: (knight: Knight) => void;
}

const CrudForm: React.FC<Props> = ({ create, dataToEdit, update, setDataToEdit }) => {
  const [form, setForm] = useState<Knight>(initialForm as Knight);

  useEffect(() => {
    if (dataToEdit.id) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (!form.name || !form.constellation) return;

    if (form.id === -1) {
      const newKnight: Knight = { ...form, id: +new Date() };

      create(newKnight);

      handleReset();
    } else {
      update(form);
      handleReset();
    }
  };
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit({} as Knight);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mb-6 font-bold">{dataToEdit.id ? "Edit" : "Add"} Knight</h3>
      <form className="flex flex-col w-9/12" onSubmit={handleSubmit}>
        <input
          className="border border-blue-200 py-2 px-4 rounded rounded-xl focus:outline-none"
          name="name"
          placeholder="Nombre"
          type="text"
          value={form.name || ""}
          onChange={handleChange}
        />
        <input
          className="border border-blue-200 py-2 px-4 rounded rounded-xl mt-3 focus:outline-none"
          name="constellation"
          placeholder="Constellation"
          type="text"
          value={form.constellation || ""}
          onChange={handleChange}
        />
        <div className="mt-2">
          <input
            className="w-16 p-1 border bg-gray-100 border-gray-400 rounded mr-2 cursor-pointer hover:bg-gray-200"
            type="submit"
            value={`${form.id === -1 ? "Add" : "Update"}`}
          />
          <input
            className="w-16 p-1 border bg-gray-100 border-gray-400 rounded cursor-pointer hover:bg-gray-200"
            type="reset"
            value="Reset"
            onClick={handleReset}
          />
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
