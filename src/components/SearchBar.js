import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div class='form-group mx-2'>
      <input
        onChange={onChange}
        type='text'
        class='form-control'
        placeholder='Search Employee'
      />
    </div>
  );
};

export default SearchBar;
