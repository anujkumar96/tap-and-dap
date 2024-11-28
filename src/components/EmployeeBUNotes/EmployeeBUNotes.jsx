
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/employeeActions';

const EmployeeBUNotes = ({ employeeId, notes }) => {
  const [newNote, setNewNote] = useState('');
  const dispatch = useDispatch();

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(employeeId, newNote));
    setNewNote('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newNote}
            onChange={handleNoteChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeBUNotes;
