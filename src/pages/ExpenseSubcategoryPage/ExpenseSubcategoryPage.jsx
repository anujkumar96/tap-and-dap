
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { activateSubcategory, inactivateSubcategory } from './actions';

const ExpenseSubcategoryPage = ({ subcategory, isActive }) => {
  const dispatch = useDispatch();

  const handleActivate = () => {
    dispatch(activateSubcategory(subcategory.id));
  };

  const handleInactivate = () => {
    dispatch(inactivateSubcategory(subcategory.id));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{subcategory.name}</Card.Title>
        <Card.Text>{subcategory.description}</Card.Text>
        {isActive ? (
          <Button variant="danger" onClick={handleInactivate}>
            Inactivate
          </Button>
        ) : (
          <Button variant="success" onClick={handleActivate}>
            Activate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ExpenseSubcategoryPage;
