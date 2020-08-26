import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <td>
        <img alt={props.info.name} src={props.info.imageURL} />
      </td>
      <td>{props.info.name}</td>
      <td>{props.info.phone}</td>
      <td>{props.info.email}</td>
      <td>{props.info.dob}</td>
    </tr>
  );
};

export default TableRow;
