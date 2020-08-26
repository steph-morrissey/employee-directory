import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Data from "../mockData.json";
import axios from "axios";
import TableRow from "./TableRow";

class EmployeeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=100&nat=gb"
      );
      this.setState({ users: data.results, loading: false });
    } catch (err) {
      this.setState({ error: "Server error", loading: false });
    }
  }

  render() {
    const { users, loading, error } = this.state;
    if (loading) {
      return <div>Loading ...</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    if (!loading) {
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
              {users.map((employee) => {
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
}

export default EmployeeTable;
