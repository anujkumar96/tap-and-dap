
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateExpenseCost } from '../actions/expenseActions';

const ExpenseCostForecastEditor = () => {
  const expenseCost = useSelector(state => state.expense.cost);
  const dispatch = useDispatch();

  const handleCostChange = (e) => {
    dispatch(updateExpenseCost(e.target.value));
  };

  return (
    <div className="expense-cost-forecast-editor">
      <Form.Group controlId="expenseCost">
        <Form.Label>Expense Cost</Form.Label>
        <Form.Control
          type="number"
          value={expenseCost}
          onChange={handleCostChange}
        />
      </Form.Group>
      <Button variant="primary">Save</Button>
    </div>
  );
};

export default ExpenseCostForecastEditor;
