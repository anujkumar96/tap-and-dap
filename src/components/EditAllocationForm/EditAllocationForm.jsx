
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editAllocation } from '../actions/allocationActions';

const EditAllocationForm = ({ allocation }) => {
  const [startDate, setStartDate] = useState(allocation.startDate);
  const [endDate, setEndDate] = useState(allocation.endDate);
  const [role, setRole] = useState(allocation.role);
  const [allocationPercentage, setAllocationPercentage] = useState(allocation.allocationPercentage);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAllocation = {
      id: allocation.id,
      startDate,
      endDate,
      role,
      allocationPercentage,
    };
    dispatch(editAllocation(updatedAllocation));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="allocationPercentage">
        <Form.Label>Allocation Percentage</Form.Label>
        <Form.Control
          type="number"
          min={0}
          max={100}
          value={allocationPercentage}
          onChange={(e) => setAllocationPercentage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EditAllocationForm;
