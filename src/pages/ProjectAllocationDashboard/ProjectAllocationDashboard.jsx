
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const ProjectAllocationDashboard = () => {
  const projects = useSelector(state => state.projects);

  return (
    <div>
      <h1>Project Allocation Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.assignedTo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectAllocationDashboard;
