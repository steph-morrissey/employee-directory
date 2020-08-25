import React from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default App;
