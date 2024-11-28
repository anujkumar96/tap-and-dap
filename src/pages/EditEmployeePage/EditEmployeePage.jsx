
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../actions/employeeActions';

const EditEmployeePage = ({ employeeId }) => {
  const dispatch = useDispatch();
  const employee = useSelector(state => state.employee);

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateEmployee(employeeId, { name, email, phone }));
  };

  return (
    <div className="edit-employee-page">
      <h1>Edit Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={handleNameChange} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={phone} onChange={handlePhoneChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default EditEmployeePage;
