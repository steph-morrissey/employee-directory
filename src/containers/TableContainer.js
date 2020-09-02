import React from "react";
import moment from "moment";

const formatName = ({ title, first, last }) => {
  return `${title}. ${first} ${last}`;
};

const formatDate = (date) => {
  return moment(date).format("DD-MM-YYYY");
};

const renderImage = (src, alt) => {
  return <img src={src} alt={alt} class='img-thumbnail' />;
};

const renderRow = (row) => {
  const name = formatName(row.name);
  return (
    <tr>
      <td>{renderImage(row.picture.large, name)}</td>
      <td>{name}</td>
      <td>{row.phone}</td>
      <td>{row.email}</td>
      <td>{formatDate(row.dob.date)}</td>
    </tr>
  );
};

const renderRows = (rows) => {
  return <tbody>{rows.map(renderRow)}</tbody>;
};

const TableContainer = ({ rows, onSortByDob }) => {
  return (
    <div className='container'>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
            <th scope='col' onClick={onSortByDob}>
              DOB
            </th>
          </tr>
        </thead>
        {renderRows(rows)}
      </table>
    </div>
  );
};

export default TableContainer;
