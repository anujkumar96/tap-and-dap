
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addClient } from '../actions/clientActions';

const ClientAdditionForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [pointOfContact, setPointOfContact] = useState('');
  const [salesPointOfContact, setSalesPointOfContact] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      name,
      pointOfContact,
      salesPointOfContact,
      contactNumber,
      email,
      description,
      country,
      currency,
      paymentTerm
    };
    dispatch(addClient(newClient));
    // Reset form fields
    setName('');
    setPointOfContact('');
    setSalesPointOfContact('');
    setContactNumber('');
    setEmail('');
    setDescription('');
    setCountry('');
    setCurrency('');
    setPaymentTerm('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="pointOfContact">
        <Form.Label>Point of Contact</Form.Label>
        <Form.Control
          type="text"
          value={pointOfContact}
          onChange={(e) => setPointOfContact(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="salesPointOfContact">
        <Form.Label>Sales Point of Contact</Form.Label>
        <Form.Control
          type="text"
          value={salesPointOfContact}
          onChange={(e) => setSalesPointOfContact(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="contactNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="currency">
        <Form.Label>Currency</Form.Label>
        <Form.Control
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="paymentTerm">
        <Form.Label>Payment Term</Form.Label>
        <Form.Control
          type="text"
          value={paymentTerm}
          onChange={(e) => setPaymentTerm(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Client
      </Button>
    </Form>
  );
};

export default ClientAdditionForm;
