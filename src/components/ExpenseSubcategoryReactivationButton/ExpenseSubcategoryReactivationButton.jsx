
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reactivateExpenseSubcategory } from '../actions';

const ExpenseSubcategoryReactivationButton = ({ subcategoryId }) => {
  const dispatch = useDispatch();

  const handleReactivate = () => {
    dispatch(reactivateExpenseSubcategory(subcategoryId));
  };

  return (
    <Button variant="primary" onClick={handleReactivate}>
      Reactivate
    </Button>
  );
};

export default ExpenseSubcategoryReactivationButton;
