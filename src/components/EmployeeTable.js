import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import SearchBar from "./SearchBar";
import TableContainer from "../containers/TableContainer";

const API_URL = "https://randomuser.me/api/?results=10&nat=gb";

class EmployeeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      employeesToRender: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(API_URL);
    const employees = data.results;

    this.setState({
      employees,
      employeesToRender: employees,
      loading: false,
      error: "",
    });
  }

  handleOnChange = (event) => {
    const { employees } = this.state;
    const filterBy = event.target.value;
    const employeesToRender = employees.filter((employee) => {
      const lastName = employee.name.last;
      const firstName = employee.name.first;

      return firstName.includes(filterBy) || lastName.includes(filterBy);
    });

    this.setState({
      employeesToRender,
    });
  };

  handleSortByDob = () => {
    const { employeesToRender } = this.state;

    const sortedEmployees = employeesToRender.sort((a, b) => {
      return moment(a.dob.date).diff(b.dob.date);
    });

    this.setState({
      employeesToRender: sortedEmployees,
    });
  };

  renderTable() {
    const { loading, error, employeesToRender } = this.state;

    if (!loading && !error) {
      return (
        <TableContainer
          rows={employeesToRender}
          onSortByDob={this.handleSortByDob}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div className='container'>
        <SearchBar onChange={this.handleOnChange} />
        {this.renderTable()}
      </div>
    );
  }
}

export default EmployeeTable;
