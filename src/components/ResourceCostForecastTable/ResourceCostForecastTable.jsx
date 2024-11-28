
import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ResourceCostForecastTable = () => {
  const resourceCosts = useSelector(state => state.resourceCosts);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Client</th>
          <th>Project</th>
          <th>Resource</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {resourceCosts.map((resourceCost, index) => (
          <tr key={index}>
            <td>{resourceCost.client}</td>
            <td>{resourceCost.project}</td>
            <td>{resourceCost.resource}</td>
            <td>{resourceCost.cost}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ResourceCostForecastTable;
