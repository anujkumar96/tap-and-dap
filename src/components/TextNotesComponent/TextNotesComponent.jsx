
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../actions/noteActions';

const TextNotesComponent = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <Card className="text-notes-card">
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default TextNotesComponent;
