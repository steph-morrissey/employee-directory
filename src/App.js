import React from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <div className='App'>
      <Header />
      <EmployeeTable />
    </div>
  );
}

export default App;
