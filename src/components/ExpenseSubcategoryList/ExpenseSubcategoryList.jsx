
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { editExpenseSubcategory, toggleExpenseSubcategory } from '../actions';

const ExpenseSubcategoryList = () => {
  const expenseSubcategories = useSelector(state => state.expenseSubcategories);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    // Dispatch editExpenseSubcategory action with the id
    dispatch(editExpenseSubcategory(id));
  };

  const handleToggle = (id) => {
    // Dispatch toggleExpenseSubcategory action with the id
    dispatch(toggleExpenseSubcategory(id));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Activate/Inactivate</th>
        </tr>
      </thead>
      <tbody>
        {expenseSubcategories.map((subcategory) => (
          <tr key={subcategory.id}>
            <td>{subcategory.name}</td>
            <td>{subcategory.category}</td>
            <td>{subcategory.description}</td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(subcategory.id)}>Edit</Button>
            </td>
            <td>
              <Button variant={subcategory.active ? "success" : "danger"} onClick={() => handleToggle(subcategory.id)}>
                {subcategory.active ? "Active" : "Inactive"}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ExpenseSubcategoryList;
