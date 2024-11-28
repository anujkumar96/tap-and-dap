
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/noteActions';

const NotesForm = () => {
  const [note, setNote] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(note));
    setNote('');
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="noteForm">
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
      </Card.Body>
    </Card>
  );
};

export default NotesForm;
