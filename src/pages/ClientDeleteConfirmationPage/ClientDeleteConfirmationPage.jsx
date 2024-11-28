import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteClient } from '../../store/reducers/counterSlice';
import { GrClose } from 'react-icons/gr';

const ClientDeleteConfirmationPage = ({ client, onCancel, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteClient(client.id));
    onDelete();
  };

  return (
    <>
      <Modal.Header >
        <Modal.Title>Confirm Delete</Modal.Title>
        <span className='bg-secondary px-1 mt-1'>
          <GrClose onClick={onCancel}/></span>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete the client: {client?.name}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ClientDeleteConfirmationPage;
