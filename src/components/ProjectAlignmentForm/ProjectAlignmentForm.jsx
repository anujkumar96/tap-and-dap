
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { alignEmployeesToProject } from '../actions/projectActions';

const ProjectAlignmentForm = () => {
  const [projectId, setProjectId] = useState('');
  const [employeeIds, setEmployeeIds] = useState([]);
  const dispatch = useDispatch();

  const handleProjectIdChange = (e) => {
    setProjectId(e.target.value);
  };

  const handleEmployeeIdChange = (e) => {
    const selectedEmployeeIds = Array.from(e.target.selectedOptions, (option) => option.value);
    setEmployeeIds(selectedEmployeeIds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(alignEmployeesToProject(projectId, employeeIds));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="projectId">
        <Form.Label>Project ID</Form.Label>
        <Form.Control type="text" value={projectId} onChange={handleProjectIdChange} />
      </Form.Group>
      <Form.Group controlId="employeeIds">
        <Form.Label>Employee IDs</Form.Label>
        <Form.Control as="select" multiple value={employeeIds} onChange={handleEmployeeIdChange}>
          <option value="1">Employee 1</option>
          <option value="2">Employee 2</option>
          <option value="3">Employee 3</option>
          {/* Add more options for employees */}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">Align Employees</Button>
    </Form>
  );
};

export default ProjectAlignmentForm;
