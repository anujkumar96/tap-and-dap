
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteAllocation } from '../actions';

const DeleteAllocationButton = ({ allocationId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAllocation(allocationId));
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete Allocation
    </Button>
  );
};

export default DeleteAllocationButton;