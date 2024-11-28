
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategoryActivation } from '../actions/categoryActions';

const ExpenseCategoryActivationToggle = ({ categoryId }) => {
  const dispatch = useDispatch();
  const activeCategories = useSelector(state => state.categories.activeCategories);

  const isActive = activeCategories.includes(categoryId);

  const handleToggle = () => {
    dispatch(toggleCategoryActivation(categoryId));
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

export default ExpenseCategoryActivationToggle;
