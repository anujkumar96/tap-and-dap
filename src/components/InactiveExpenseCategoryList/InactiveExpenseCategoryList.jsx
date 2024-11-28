
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { reactivateExpenseCategory } from '../actions/expenseCategoryActions';

const InactiveExpenseCategoryList = () => {
  const inactiveExpenseCategories = useSelector(state => state.expenseCategories.inactive);
  const dispatch = useDispatch();

  const handleReactivate = (categoryId) => {
    dispatch(reactivateExpenseCategory(categoryId));
  };

  return (
    <div>
      <h2>Inactive Expense Categories</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inactiveExpenseCategories.map(category => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <Button variant="primary" onClick={() => handleReactivate(category.id)}>Reactivate</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InactiveExpenseCategoryList;
