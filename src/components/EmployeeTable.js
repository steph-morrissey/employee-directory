import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Data from "../mockData.json";

class EmployeeTable extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {Data.results.map((employee) => {
              return (
                <tr>
                  <td>{`${employee.picture.thumbnail}`}</td>
                  <td>{`${employee.name.first} ${employee.name.last}`}</td>
                  <td>{`${employee.phone}`}</td>
                  <td>{`${employee.email}`}</td>
                  <td>{`${employee.dob.date}`}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EmployeeTable;
