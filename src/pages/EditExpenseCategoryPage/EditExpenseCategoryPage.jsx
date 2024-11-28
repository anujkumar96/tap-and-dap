
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateExpenseCategory } from '../actions/expenseCategoryActions';

const EditExpenseCategoryPage = ({ expenseCategory }) => {
  const [name, setName] = useState(expenseCategory.name);
  const [description, setDescription] = useState(expenseCategory.description);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExpenseCategory(expenseCategory.id, name, description));
  };

  return (
    <div className="edit-expense-category-page">
      <h1>Edit Expense Category</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditExpenseCategoryPage;
