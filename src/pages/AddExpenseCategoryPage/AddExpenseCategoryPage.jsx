
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addExpenseCategory } from '../actions/expenseActions';

const AddExpenseCategoryPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    dispatch(addExpenseCategory(categoryName));
    setCategoryName('');
  };

  return (
    <div className="add-expense-category-page">
      <h1>Add Expense Category</h1>
      <Form>
        <Form.Group controlId="categoryName">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddCategory}>
          Add Category
        </Button>
      </Form>
    </div>
  );
};

export default AddExpenseCategoryPage;
