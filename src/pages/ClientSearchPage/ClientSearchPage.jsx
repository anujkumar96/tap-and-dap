
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchClients } from '../actions/clientActions';

const ClientSearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState('');

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchClients(searchCriteria));
  };

  return (
    <div className="client-search-page">
      <Form>
        <Form.Group controlId="searchCriteria">
          <Form.Label>Search Criteria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search criteria"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default ClientSearchPage;
