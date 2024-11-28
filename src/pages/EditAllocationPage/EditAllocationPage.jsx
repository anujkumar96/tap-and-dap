
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateAllocation } from '../actions/allocationActions';

const EditAllocationPage = ({ allocation }) => {
  const [hours, setHours] = useState(allocation.hours);
  const [comments, setComments] = useState(allocation.comments);
  const dispatch = useDispatch();

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAllocation(allocation.id, hours, comments));
  };

  return (
    <div className="edit-allocation-page">
      <h2>Edit Allocation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="hours">
          <Form.Label>Hours</Form.Label>
          <Form.Control
            type="number"
            value={hours}
            onChange={handleHoursChange}
          />
        </Form.Group>
        <Form.Group controlId="comments">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comments}
            onChange={handleCommentsChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditAllocationPage;
