import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class SearchBar extends Component {
  render() {
    return (
      <div className='container'>
        <Form className='py-3'>
          <Form.Group controlId='searchFilter'>
            <Form.Control type='search' placeholder='Search...' />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
