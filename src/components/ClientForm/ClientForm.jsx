
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addClient } from '../actions/clientActions';

const ClientForm = () => {
  const [clientName, setClientName] = useState('');
  const [clientPOCName, setClientPOCName] = useState('');
  const [clientSalesPOCName, setClientSalesPOCName] = useState('');
  const [clientContactNumber, setClientContactNumber] = useState('');
  const [clientContactEmail, setClientContactEmail] = useState('');
  const [clientDescription, setClientDescription] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  const [clientCurrency, setClientCurrency] = useState('');
  const [clientPaymentTerm, setClientPaymentTerm] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      clientName,
      clientPOCName,
      clientSalesPOCName,
      clientContactNumber,
      clientContactEmail,
      clientDescription,
      clientCountry,
      clientCurrency,
      clientPaymentTerm
    };

    dispatch(addClient(newClient));

    // Reset form fields
    setClientName('');
    setClientPOCName('');
    setClientSalesPOCName('');
    setClientContactNumber('');
    setClientContactEmail('');
    setClientDescription('');
    setClientCountry('');
    setClientCurrency('');
    setClientPaymentTerm('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="clientName">
        <Form.Label>Client Name</Form.Label>
        <Form.Control
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientPOCName">
        <Form.Label>Client POC Name</Form.Label>
        <Form.Control
          type="text"
          value={clientPOCName}
          onChange={(e) => setClientPOCName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientSalesPOCName">
        <Form.Label>Client Sales POC Name</Form.Label>
        <Form.Control
          type="text"
          value={clientSalesPOCName}
          onChange={(e) => setClientSalesPOCName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientContactNumber">
        <Form.Label>Client Contact Number</Form.Label>
        <Form.Control
          type="text"
          value={clientContactNumber}
          onChange={(e) => setClientContactNumber(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientContactEmail">
        <Form.Label>Client Contact Email</Form.Label>
        <Form.Control
          type="email"
          value={clientContactEmail}
          onChange={(e) => setClientContactEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientDescription">
        <Form.Label>Client Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={clientDescription}
          onChange={(e) => setClientDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientCountry">
        <Form.Label>Client Country</Form.Label>
        <Form.Control
          type="text"
          value={clientCountry}
          onChange={(e) => setClientCountry(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientCurrency">
        <Form.Label>Client Currency</Form.Label>
        <Form.Control
          type="text"
          value={clientCurrency}
          onChange={(e) => setClientCurrency(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="clientPaymentTerm">
        <Form.Label>Client Payment Term</Form.Label>
        <Form.Control
          type="text"
          value={clientPaymentTerm}
          onChange={(e) => setClientPaymentTerm(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Client
      </Button>
    </Form>
  );
};

export default ClientForm;
