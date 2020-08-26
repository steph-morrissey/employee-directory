import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Data from "../mockData.json";
import axios from "axios";
import TableRow from "./TableRow";

class EmployeeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      name: "",
      phone: "",
      email: "",
      dob: "",
      loading: true,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    this.renderEmployees();
  }

  async renderEmployees() {
    const { data } = await axios.get(
      "https://randomuser.me/api/?results=100&nat=gb"
    );
    console.log(data);
    if (data.results) {
      this.setState = {
        imageUrl: "",
        name: "",
        phone: "",
        email: "",
        dob: "",
      };
    }
  }

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
              const employeeInfo = {
                imageURL: `${employee.picture.thumbnail}`,
                name: `${employee.name.first} ${employee.name.last}`,
                phone: `${employee.phone}`,
                email: `${employee.email}`,
                dob: `${employee.dob.date}`,
              };
              return <TableRow info={employeeInfo} />;
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EmployeeTable;
