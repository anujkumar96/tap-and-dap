
import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setClientDescription } from '../actions';

const TextArea = () => {
  const dispatch = useDispatch();
  const clientDescription = useSelector(state => state.clientDescription);

  const handleDescriptionChange = (e) => {
    dispatch(setClientDescription(e.target.value));
  };

  return (
    <Form.Group controlId="clientDescription">
      <Form.Label>Client Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        value={clientDescription}
        onChange={handleDescriptionChange}
      />
    </Form.Group>
  );
};

export default TextArea;
