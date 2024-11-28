
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCollectionActual, editCollectionActual } from '../actions/collectionActions';

const CollectionActualsForm = ({ collectionActual, projectId }) => {
  const [amount, setAmount] = useState(collectionActual ? collectionActual.amount : '');
  const [date, setDate] = useState(collectionActual ? collectionActual.date : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (collectionActual) {
      dispatch(editCollectionActual(collectionActual.id, amount, date));
    } else {
      dispatch(addCollectionActual(projectId, amount, date));
    }

    setAmount('');
    setDate('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {collectionActual ? 'Edit Collection Actual' : 'Add Collection Actual'}
      </Button>
    </Form>
  );
};

export default CollectionActualsForm;
