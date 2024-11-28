
import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchResource } from '../actions/resourceActions';

const ResourceSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchResource(searchTerm));
  };

  return (
    <div className="resource-search-page">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </Form>
    </div>
  );
};

export default ResourceSearchPage;
