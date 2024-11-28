import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import ClientEditPage from './../ClientEditPage/ClientEditPage'
import ClientAdditionForm from '../ClientAdditionForm/ClientAdditionForm';
import { useNavigate } from 'react-router-dom';
import ClientDeleteConfirmationPage from '../ClientDeleteConfirmationPage/ClientDeleteConfirmationPage';
import { deleteClient } from '../../store/reducers/counterSlice';
import { MdDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
const ClientListPage = (id) => {
  const clients = useSelector(state => state?.add?.client);
  const dispatch=useDispatch();
  const [filterText, setFilterText] = useState("");
  const [filteredClients, setFilteredClients] = useState(null);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [deleteClientId, setDeleteClientId] = useState(null);

const history=useNavigate();

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = clients.filter(client =>
      client.name.toLowerCase().includes(filterText?.trim().toLowerCase())
    );
    setFilteredClients(filtered);
  };

  const handleClearFilter = () => {
    setFilteredClients(null);
    setFilterText("");
  };

  const openAddForm = () => {
    setAddForm(true);
  }
  useEffect(()=>{
    setEditForm(false)
  },[clients])
  const handleClose = () => {
    setAddForm(false)
    setEditForm(false);
    setDeleteForm(false);
    setDeleteClientId(null);
  }
  const handleEditClick = (id) => {
    setEditForm(true);
      history('/homepage/client', { state: id });
  };


  const handleDeleteClick = (id) => {
    setDeleteClientId(id);
    setDeleteForm(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteClient(deleteClientId));
    setDeleteClientId(null);
    setDeleteForm(false);
  };

  const style={
    maxWidth:"75%",
    margin:"auto"
   }
    
  return (
    <Container style={style}>
      <Row className="align-items-left mt-5 mb-3">
          <Row>
            <h2 className="ml-4">Client List</h2>
          </Row>
        </Row>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="filterText">
              <Form.Control
                type="text"
                placeholder="Search Name"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Button variant="primary" onClick={handleFilter} className="mb-2 mr-3">
            Filter
          </Button>
          <Button
            variant="secondary"
            onClick={handleClearFilter}
            className="mb-2"
            style={{ display: filterText ? 'inline-block' : 'none' }}
          >
            Clear Filter
          </Button>
          <Col  className="d-flex justify-content-end mb-2">
        <Button variant="primary" onClick={openAddForm}>Add Client</Button>
        </Col>
        <Modal show={addForm} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Client</Modal.Title>
          <span className='bg-secondary px-1 mt-1'>
          <GrClose onClick={handleClose}/></span>
        </Modal.Header>
        <Modal.Body>
          <ClientAdditionForm></ClientAdditionForm>
        </Modal.Body>
      </Modal>
        </Row>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(filteredClients || clients)?.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td className="text-center">
              <Button 
                        variant="success"
                        className="bg-success text-white "
                        onClick={() => handleEditClick(client.id)}
                      >
                       <FiEdit/>
                      </Button>
                      <Button 
                        variant="danger"
                        className=" text-white ml-2"
                        onClick={() => handleDeleteClick(client.id)}
                      >
                     <MdDeleteForever />
                      </Button></td>
            </tr>
            
          ))}
                    <Modal show={editForm} onHide={handleClose}>
            <Modal.Header>
          <Modal.Title>Edit Client</Modal.Title>
          <span className='bg-secondary px-1 mt-1'>
          <GrClose onClick={handleClose}/></span>
        </Modal.Header>
        <Modal.Body>
          <ClientEditPage ></ClientEditPage>
        </Modal.Body>
      </Modal>
      <Modal centered show={deleteForm} onHide={handleClose}>
        <Modal.Body>
          <ClientDeleteConfirmationPage
            client={clients.find(client => client.id === deleteClientId)}
            onCancel={handleClose}
            onDelete={handleDeleteConfirm}
          />
        </Modal.Body>
      </Modal>
        </tbody>
      </Table>
    </Container>
  );
};

export default ClientListPage;


