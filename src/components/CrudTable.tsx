import React, { Fragment } from "react";
import CrudTableRow from "./CrudTableRow";
import { Knight } from "./types";

interface Props {
  listOfKnights: Knight[];
  remove: (id: Knight["id"]) => void;
  setDataToEdit: (knight: Knight) => void;
}

const CrudTable: React.FC<Props> = ({ listOfKnights, remove, setDataToEdit }) => {
  return (
    <Fragment>
      <h3>List of Knight</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Constellation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfKnights.length === 0 ? (
            <tr>
              <td colSpan={3}>Without data</td>
            </tr>
          ) : (
            listOfKnights.map((knight, index) => (
              <CrudTableRow
                key={index}
                knight={knight}
                remove={remove}
                setDataToEdit={setDataToEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default CrudTable;
