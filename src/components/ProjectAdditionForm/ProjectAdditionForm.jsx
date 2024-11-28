
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProject } from '../actions/projectActions';

const ProjectAdditionForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [billing, setBilling] = useState('');
  const [deliveryBusinessUnit, setDeliveryBusinessUnit] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = {
      name,
      description,
      techStack,
      billing,
      deliveryBusinessUnit
    };

    dispatch(addProject(project));

    setName('');
    setDescription('');
    setTechStack('');
    setBilling('');
    setDeliveryBusinessUnit('');
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

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="techStack">
        <Form.Label>Tech Stack</Form.Label>
        <Form.Control
          type="text"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="billing">
        <Form.Label>Billing</Form.Label>
        <Form.Control
          type="text"
          value={billing}
          onChange={(e) => setBilling(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="deliveryBusinessUnit">
        <Form.Label>Delivery Business Unit</Form.Label>
        <Form.Control
          type="text"
          value={deliveryBusinessUnit}
          onChange={(e) => setDeliveryBusinessUnit(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Project
      </Button>
    </Form>
  );
};

export default ProjectAdditionForm;
