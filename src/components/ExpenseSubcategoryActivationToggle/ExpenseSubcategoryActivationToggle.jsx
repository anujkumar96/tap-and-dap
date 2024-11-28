
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubcategoryActivation } from '../actions/subcategoryActions';

const ExpenseSubcategoryActivationToggle = ({ subcategoryId }) => {
  const dispatch = useDispatch();
  const isActive = useSelector(state => state.subcategories[subcategoryId].isActive);

  const handleToggle = () => {
    dispatch(toggleSubcategoryActivation(subcategoryId));
  };

  return (
    <Button
      variant={isActive ? 'success' : 'danger'}
      onClick={handleToggle}
    >
      {isActive ? 'Active' : 'Inactive'}
    </Button>
  );
};

export default ExpenseSubcategoryActivationToggle;
