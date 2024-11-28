
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../actions/noteActions';

const ViewNotesPage = () => {
  const [note, setNote] = useState('');
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote(note));
    setNote('');
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>View Notes Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="noteForm">
              <Form.Label>Add Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter note"
                value={note}
                onChange={e => setNote(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddNote}>
              Add
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Notes:</h3>
          <ListGroup>
            {notes.map((note, index) => (
              <ListGroup.Item key={index}>{note}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewNotesPage;
