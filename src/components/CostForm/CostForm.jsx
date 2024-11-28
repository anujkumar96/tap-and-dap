
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCost } from '../actions/costActions';

const CostForm = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCost({ name, cost }));
    setName('');
    setCost('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter monthly cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Cost
      </Button>
    </Form>
  );
};

export default CostForm;
