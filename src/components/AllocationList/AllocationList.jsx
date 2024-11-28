// React UI functional component code in JavaScript using React Bootstrap components with styling with SCSS and state management with Redux

import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import './AllocationList.scss';

const AllocationList = () => {
  const allocations = useSelector(state => state.allocations);

  return (
    <div className="allocation-list">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Role</th>
            <th>% Allocation</th>
          </tr>
        </thead>
        <tbody>
          {allocations.map(allocation => (
            <tr key={allocation.id}>
              <td>{allocation.employee}</td>
              <td>{allocation.startDate}</td>
              <td>{allocation.endDate}</td>
              <td>{allocation.role}</td>
              <td>{allocation.allocationPercentage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllocationList;
