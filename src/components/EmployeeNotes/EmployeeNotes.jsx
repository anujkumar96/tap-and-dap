
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addEmployeeNote } from '../actions/employeeActions';

const EmployeeNotes = ({ employeeId, month }) => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployeeNote(employeeId, month, note));
    setNote('');
  };

  return (
    <div className="employee-notes">
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
          Save Note
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeNotes;
