import React, { Fragment } from "react";
import { Knight } from "./types";

export interface Props {
  knight: Knight;
}

const CrudTableRow: React.FC<Props> = ({ knight }) => {
  return (
    <Fragment>
      <tr>
        <td>{knight.name}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </Fragment>
  );
};

export default CrudTableRow;
