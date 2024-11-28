
// MyComponent.js

import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions';

const MyComponent = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className="my-component">
      <h1>Counter: {counter}</h1>
      <Button variant="primary" onClick={handleIncrement}>Increment</Button>
      <Button variant="danger" onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default MyComponent;
