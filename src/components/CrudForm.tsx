import React, { Fragment, useEffect, useState } from "react";
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
    <Fragment>
      <h3>{dataToEdit.id ? "Edit" : "Add"} Knight</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nombre"
          type="text"
          value={form.name || ""}
          onChange={handleChange}
        />
        <input
          name="constellation"
          placeholder="Constellation"
          type="text"
          value={form.constellation || ""}
          onChange={handleChange}
        />
        <input type="submit" value={`${form.id === -1 ? "Add" : "Update"}`} />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </Fragment>
  );
};

export default CrudForm;
