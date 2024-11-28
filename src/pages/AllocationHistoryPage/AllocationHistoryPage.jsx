
import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AllocationHistoryPage = () => {
  const allocationHistory = useSelector(state => state.allocationHistory);

  return (
    <div className="allocation-history-page">
      <h1>Allocation History</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee/Project</th>
            <th>Allocation</th>
          </tr>
        </thead>
        <tbody>
          {allocationHistory.map((allocation, index) => (
            <tr key={index}>
              <td>{allocation.date}</td>
              <td>{allocation.employeeOrProject}</td>
              <td>{allocation.allocation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllocationHistoryPage;
