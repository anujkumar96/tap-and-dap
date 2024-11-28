import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../actions/employeeActions';

const AddEmployeePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      age,
      position
    };

    dispatch(addEmployee(newEmployee));

    setName('');
    setAge('');
    setPosition('');
  };

  return (
    <div className="add-employee-page">
      <h2>Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Employee
        </Button>
      </Form>
    </div>
  );
};

export default AddEmployeePage;
