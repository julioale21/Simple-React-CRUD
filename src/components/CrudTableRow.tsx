import React, { Fragment } from "react";
import { Knight } from "./types";

export interface Props {
  knight: Knight;
  remove: (id: Knight["id"]) => void;
  setDataToEdit: (knight: Knight) => void;
}

const CrudTableRow: React.FC<Props> = ({ knight, remove, setDataToEdit }) => {
  return (
    <Fragment>
      <tr>
        <td>{knight.name}</td>
        <td>{knight.constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(knight)}>Edit</button>
          <button onClick={() => remove(knight.id)}>Delete</button>
        </td>
      </tr>
    </Fragment>
  );
};

export default CrudTableRow;
