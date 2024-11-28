
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateResourceAllocation } from '../actions/resourceActions';

const ResourceAllocationEditPage = () => {
  const dispatch = useDispatch();
  const resource = useSelector(state => state.resource);

  const [startDate, setStartDate] = useState(resource.startDate);
  const [endDate, setEndDate] = useState(resource.endDate);
  const [role, setRole] = useState(resource.role);
  const [percentageAllocation, setPercentageAllocation] = useState(resource.percentageAllocation);

  const handleUpdate = () => {
    const updatedResource = {
      ...resource,
      startDate,
      endDate,
      role,
      percentageAllocation
    };
    dispatch(updateResourceAllocation(updatedResource));
  };

  return (
    <div>
      <h1>Resource Allocation Edit Page</h1>
      <Form>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            value={role}
            onChange={e => setRole(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="percentageAllocation">
          <Form.Label>Percentage Allocation</Form.Label>
          <Form.Control
            type="number"
            value={percentageAllocation}
            onChange={e => setPercentageAllocation(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ResourceAllocationEditPage;
