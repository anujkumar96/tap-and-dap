
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addRevenueActual, editRevenueActual } from '../actions/revenueActions';

const RevenueActualsForm = ({ revenueActual, isEditing }) => {
  const [revenue, setRevenue] = useState(revenueActual.revenue || '');
  const [date, setDate] = useState(revenueActual.date || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(editRevenueActual(revenueActual.id, revenue, date));
    } else {
      dispatch(addRevenueActual(revenue, date));
    }

    setRevenue('');
    setDate('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="revenue">
        <Form.Label>Revenue</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
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
        {isEditing ? 'Save' : 'Add'}
      </Button>
    </Form>
  );
};

export default RevenueActualsForm;
