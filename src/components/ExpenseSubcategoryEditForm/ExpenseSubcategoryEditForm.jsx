
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateExpenseSubcategory } from '../actions/expenseActions';

const ExpenseSubcategoryEditForm = ({ expenseSubcategory }) => {
  const [category, setCategory] = useState(expenseSubcategory.category);
  const [description, setDescription] = useState(expenseSubcategory.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExpenseSubcategory(expenseSubcategory.id, category, description));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default ExpenseSubcategoryEditForm;
