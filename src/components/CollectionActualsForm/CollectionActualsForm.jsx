
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCollectionActual, editCollectionActual } from '../actions/collectionActions';

const CollectionActualsForm = ({ collectionActual, isEditing }) => {
  const [amount, setAmount] = useState(collectionActual.amount || '');
  const [date, setDate] = useState(collectionActual.date || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCollectionActual = {
      amount,
      date
    };

    if (isEditing) {
      dispatch(editCollectionActual(collectionActual.id, newCollectionActual));
    } else {
      dispatch(addCollectionActual(newCollectionActual));
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
        />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {isEditing ? 'Update' : 'Add'}
      </Button>
    </Form>
  );
};

export default CollectionActualsForm;
