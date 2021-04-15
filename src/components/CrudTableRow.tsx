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
      <tr className="text-center border-b">
        <td className="py-4 px-2">{knight.name}</td>
        <td className="py-4 px-2">{knight.constellation}</td>
        <td className="flex justify-around py-4 px-2">
          <button
            className="p-2 border bg-red-50 border-red-400 rounded transition duration-300 ease-in-out hover:bg-red-400 hover:text-white hover:font-bold"
            onClick={() => setDataToEdit(knight)}
          >
            Edit
          </button>
          <button
            className="p-2 border bg-green-50 border-green-400 rounded transition duration-300 ease-in-out hover:bg-green-400 hover:text-white hover:font-bold"
            onClick={() => remove(knight.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default CrudTableRow;
