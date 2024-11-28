
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/notesActions';

const BUHeadNotesForm = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(note));
    setNote('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="note">
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Note
      </Button>
    </Form>
  );
};

export default BUHeadNotesForm;
