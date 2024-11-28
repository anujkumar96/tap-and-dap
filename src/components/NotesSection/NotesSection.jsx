
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/noteActions';

const NotesSection = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    dispatch(addNote(note));
    setNote('');
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Notes Section</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="noteForm">
            <Form.Label>Add Note:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={note}
              onChange={handleNoteChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleAddNote}>
            Add Note
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotesSection;
