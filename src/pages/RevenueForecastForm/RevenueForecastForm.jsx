
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addRevenueForecast, editRevenueForecast } from '../actions/revenueForecastActions';

const RevenueForecastForm = ({ forecast, editMode }) => {
  const [revenue, setRevenue] = useState(forecast ? forecast.revenue : '');
  const [date, setDate] = useState(forecast ? forecast.date : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatch(editRevenueForecast(forecast.id, revenue, date));
    } else {
      dispatch(addRevenueForecast(revenue, date));
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
        {editMode ? 'Save' : 'Add'}
      </Button>
    </Form>
  );
};

export default RevenueForecastForm;
