import React, { Fragment, useEffect, useState } from "react";

const initialForm = {
  id: null,
  name: "",
  constellation: "",
};

const CrudForm: React.FC = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.name);
    // eslint-disable-next-line no-console
    console.log(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };
  const handleReset = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h3>Add Knight</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nombre"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="constellation"
          placeholder="Constellation"
          type="text"
          value={form.constellation}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </Fragment>
  );
};

export default CrudForm;
