
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Table } from 'react-bootstrap';
import { allocateEmployee } from '../actions/employeeActions';

const EmployeeAllocationPage = () => {
  const employees = useSelector(state => state.employees);
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handleAllocation = () => {
    dispatch(allocateEmployee(selectedEmployee, selectedProject));
    setSelectedEmployee('');
    setSelectedProject('');
  };

  return (
    <div>
      <h1>Employee Allocation Page</h1>
      <Form>
        <Form.Group controlId="employeeSelect">
          <Form.Label>Select Employee:</Form.Label>
          <Form.Control as="select" value={selectedEmployee} onChange={handleEmployeeChange}>
            <option value="">Select an employee</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>{employee.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="projectSelect">
          <Form.Label>Select Project:</Form.Label>
          <Form.Control as="select" value={selectedProject} onChange={handleProjectChange}>
            <option value="">Select a project</option>
            {projects.map(project => (
              <option key={project.id} value={project.id}>{project.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleAllocation}>Allocate</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.project}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeAllocationPage;
