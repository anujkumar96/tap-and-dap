
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { markLWD } from '../actions/employeeActions';

const MarkLWDPage = () => {
  const [employee, setEmployee] = useState('');
  const [lwdDate, setLwdDate] = useState('');

  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const handleEmployeeChange = (e) => {
    setEmployee(e.target.value);
  };

  const handleLwdDateChange = (e) => {
    setLwdDate(e.target.value);
  };

  const handleMarkLWD = () => {
    dispatch(markLWD(employee, lwdDate));
  };

  return (
    <div className="mark-lwd-page">
      <h1>Mark LWD Page</h1>
      <Form>
        <Form.Group controlId="employeeSelect">
          <Form.Label>Select Employee</Form.Label>
          <Form.Control as="select" value={employee} onChange={handleEmployeeChange}>
            <option value="">Select Employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="lwdDate">
          <Form.Label>Last Working Day Date</Form.Label>
          <Form.Control type="date" value={lwdDate} onChange={handleLwdDateChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleMarkLWD}>
          Mark LWD
        </Button>
      </Form>
    </div>
  );
};

export default MarkLWDPage;
