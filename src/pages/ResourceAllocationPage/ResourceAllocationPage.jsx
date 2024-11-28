
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { assignEmployeeToProject } from '../actions/projectActions';

const ResourceAllocationPage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [allocatedHours, setAllocatedHours] = useState('');

  const employees = useSelector((state) => state.employees);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const handleHoursChange = (e) => {
    setAllocatedHours(e.target.value);
  };

  const handleAssign = () => {
    dispatch(assignEmployeeToProject(selectedEmployee, selectedProject, allocatedHours));
    setSelectedEmployee('');
    setSelectedProject('');
    setAllocatedHours('');
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Resource Allocation Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="employeeSelect">
              <Form.Label>Select Employee</Form.Label>
              <Form.Control as="select" value={selectedEmployee} onChange={handleEmployeeChange}>
                <option value="">Select an employee</option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="projectSelect">
              <Form.Label>Select Project</Form.Label>
              <Form.Control as="select" value={selectedProject} onChange={handleProjectChange}>
                <option value="">Select a project</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="allocatedHoursInput">
              <Form.Label>Allocated Hours</Form.Label>
              <Form.Control type="number" value={allocatedHours} onChange={handleHoursChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleAssign}>
              Assign
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResourceAllocationPage;
