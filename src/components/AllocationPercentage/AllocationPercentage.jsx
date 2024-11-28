
import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setAllocationPercentage } from './actions';

const AllocationPercentage = () => {
  const allocationPercentage = useSelector(state => state.allocationPercentage);
  const dispatch = useDispatch();

  const handleAllocationChange = (e) => {
    dispatch(setAllocationPercentage(e.target.value));
  };

  return (
    <Form.Group controlId="allocationPercentage">
      <Form.Label>Allocation Percentage</Form.Label>
      <Form.Control
        type="number"
        value={allocationPercentage}
        onChange={handleAllocationChange}
      />
    </Form.Group>
  );
};

export default AllocationPercentage;
