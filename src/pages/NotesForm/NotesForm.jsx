
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/notesActions';

const NotesForm = () => {
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
        <Form.Label>Add Note</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default NotesForm;
