
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { activateExpenseSubcategory, inactivateExpenseSubcategory } from '../actions/expenseSubcategoryActions';

const ExpenseSubcategoryActivationButton = ({ expenseSubcategory }) => {
  const dispatch = useDispatch();

  const handleActivation = () => {
    if (expenseSubcategory.active) {
      dispatch(inactivateExpenseSubcategory(expenseSubcategory.id));
    } else {
      dispatch(activateExpenseSubcategory(expenseSubcategory.id));
    }
  };

  return (
    <Button
      variant={expenseSubcategory.active ? 'success' : 'danger'}
      onClick={handleActivation}
    >
      {expenseSubcategory.active ? 'Active' : 'Inactive'}
    </Button>
  );
};

export default ExpenseSubcategoryActivationButton;
