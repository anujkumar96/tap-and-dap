
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenseSubcategories } from 'actions/expenseSubcategoryActions';
import { ListGroup } from 'react-bootstrap';

const ExpenseSubcategoriesListPage = () => {
  const expenseSubcategories = useSelector(state => state.expenseSubcategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenseSubcategories());
  }, [dispatch]);

  return (
    <div className="expense-subcategories-list-page">
      <h1>Expense Subcategories</h1>
      <ListGroup>
        {expenseSubcategories.map(subcategory => (
          <ListGroup.Item key={subcategory.id}>{subcategory.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ExpenseSubcategoriesListPage;
