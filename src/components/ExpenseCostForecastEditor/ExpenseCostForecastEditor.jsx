
import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateExpenseCost } from '../actions/expenseActions';

const ExpenseCostForecastEditor = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [cost, setCost] = useState('');

  const dispatch = useDispatch();
  const expenseCosts = useSelector((state) => state.expenseCosts);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleSave = () => {
    dispatch(updateExpenseCost(category, subcategory, cost));
    setCategory('');
    setSubcategory('');
    setCost('');
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={handleCategoryChange}
          />
        </Form.Group>

        <Form.Group controlId="subcategory">
          <Form.Label>Subcategory</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subcategory"
            value={subcategory}
            onChange={handleSubcategoryChange}
          />
        </Form.Group>

        <Form.Group controlId="cost">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter cost"
            value={cost}
            onChange={handleCostChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {expenseCosts.map((expenseCost) => (
            <tr key={`${expenseCost.category}-${expenseCost.subcategory}`}>
              <td>{expenseCost.category}</td>
              <td>{expenseCost.subcategory}</td>
              <td>{expenseCost.cost}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseCostForecastEditor;
