import React from "react";
import CrudTableRow from "./CrudTableRow";
import { Knight } from "./types";

interface Props {
  listOfKnights: Knight[];
  remove: (id: Knight["id"]) => void;
  setDataToEdit: (knight: Knight) => void;
}

const CrudTable: React.FC<Props> = ({ listOfKnights, remove, setDataToEdit }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3 className="mb-6 font-bold underline">List of Knight</h3>
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/3">Name</th>
            <th className="w-1/3">Constellation</th>
            <th className="w-1/3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfKnights.length > 0 ? (
            listOfKnights.map((knight, index) => (
              <CrudTableRow
                key={index}
                knight={knight}
                remove={remove}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) : (
            <tr>
              <td className="text-center pt-6" colSpan={3}>
                Sin datos
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
