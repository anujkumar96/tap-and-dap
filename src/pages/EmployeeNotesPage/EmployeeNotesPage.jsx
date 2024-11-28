
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote } from './actions';

const EmployeeNotesPage = () => {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    const note = prompt('Enter a note:');
    if (note) {
      dispatch(addNote(note));
    }
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Employee Notes Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleAddNote}>Add Note</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {notes.map((note, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Text>{note}</Card.Text>
                <Button variant="danger" onClick={() => handleDeleteNote(index)}>Delete</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeNotesPage;
