import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateExpenseCost } from '../actions/expenseActions';

const ExpenseCostForecastForm = ({ category, subcategory, month, forecastedCost }) => {
  const dispatch = useDispatch();
  const [cost, setCost] = useState(forecastedCost);

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExpenseCost(category, subcategory, month, cost));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formExpenseCost">
        <Form.Label>Forecasted Cost</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter forecasted cost"
          value={cost}
          onChange={handleCostChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default ExpenseCostForecastForm;
