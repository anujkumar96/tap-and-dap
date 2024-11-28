
import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const ExpenseCategoryListPage = () => {
  const expenseCategories = useSelector(state => state.expenseCategories);

  return (
    <div>
      <h1>Expense Category List</h1>
      <ListGroup>
        {expenseCategories.map(category => (
          <ListGroup.Item key={category.id}>{category.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ExpenseCategoryListPage;
