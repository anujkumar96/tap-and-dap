
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../actions/notesActions';

const AddNotesPage = () => {
  const [employee, setEmployee] = useState('');
  const [month, setMonth] = useState('');
  const [notes, setNotes] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(employee, month, notes));
    setEmployee('');
    setMonth('');
    setNotes('');
  };

  return (
    <div className="add-notes-page">
      <h1>Add Notes</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="employee">
          <Form.Label>Employee</Form.Label>
          <Form.Control
            type="text"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="month">
          <Form.Label>Month</Form.Label>
          <Form.Control
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Note
        </Button>
      </Form>
    </div>
  );
};

export default AddNotesPage;
