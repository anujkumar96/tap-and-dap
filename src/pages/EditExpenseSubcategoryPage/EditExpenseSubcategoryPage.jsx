
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateExpenseSubcategory } from '../actions/expenseActions';

const EditExpenseSubcategoryPage = ({ expenseSubcategory }) => {
  const [name, setName] = useState(expenseSubcategory.name);
  const [description, setDescription] = useState(expenseSubcategory.description);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSubcategory = {
      id: expenseSubcategory.id,
      name,
      description,
    };
    dispatch(updateExpenseSubcategory(updatedSubcategory));
  };

  return (
    <div className="edit-expense-subcategory-page">
      <h1>Edit Expense Subcategory</h1>
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

export default EditExpenseSubcategoryPage;
