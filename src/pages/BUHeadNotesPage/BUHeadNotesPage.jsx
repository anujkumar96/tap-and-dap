
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../actions/notesActions';

const BUHeadNotesPage = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  }

  const handleAddNote = () => {
    dispatch(addNote(note));
    setNote('');
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>BU Head Notes Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="noteForm">
              <Form.Label>Add Note</Form.Label>
              <Form.Control type="text" value={note} onChange={handleNoteChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleAddNote}>Add</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Notes</h2>
          {notes.map((note, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Text>{note}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default BUHeadNotesPage;
