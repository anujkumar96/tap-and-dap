
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { setActiveCategory, reactivateCategory } from './actions';

const ExpenseCategoryList = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleSetActive = (categoryId) => {
    dispatch(setActiveCategory(categoryId));
  };

  const handleReactivate = (categoryId) => {
    dispatch(reactivateCategory(categoryId));
  };

  return (
    <ListGroup>
      {categories.map(category => (
        <ListGroup.Item key={category.id}>
          <span className={category.active ? 'active' : 'inactive'}>
            {category.name}
          </span>
          {category.active ? (
            <Button variant="secondary" onClick={() => handleSetActive(category.id)}>
              Deactivate
            </Button>
          ) : (
            <Button variant="success" onClick={() => handleReactivate(category.id)}>
              Reactivate
            </Button>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ExpenseCategoryList;
