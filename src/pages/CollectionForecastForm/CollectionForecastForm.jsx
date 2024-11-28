
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCollectionForecast, editCollectionForecast } from '../actions/collectionForecastActions';

const CollectionForecastForm = ({ forecast, editMode, onClose }) => {
  const [name, setName] = useState(forecast ? forecast.name : '');
  const [amount, setAmount] = useState(forecast ? forecast.amount : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForecast = {
      name,
      amount
    };

    if (editMode) {
      dispatch(editCollectionForecast(forecast.id, newForecast));
    } else {
      dispatch(addCollectionForecast(newForecast));
    }

    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {editMode ? 'Save' : 'Add'}
      </Button>
    </Form>
  );
};

export default CollectionForecastForm;
