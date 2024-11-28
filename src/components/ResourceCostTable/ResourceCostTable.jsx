
// Import necessary dependencies
import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateResourceCost } from './actions/resourceActions';

// Define the ResourceCostTable component
const ResourceCostTable = () => {
  // Access the resource cost data from Redux store
  const resourceCosts = useSelector(state => state.resourceCosts);
  const dispatch = useDispatch();

  // Handle input change and update resource cost
  const handleInputChange = (event, resourceId) => {
    const newCost = event.target.value;
    dispatch(updateResourceCost(resourceId, newCost));
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {resourceCosts.map(resource => (
          <tr key={resource.id}>
            <td>{resource.name}</td>
            <td>
              <input
                type="number"
                value={resource.cost}
                onChange={event => handleInputChange(event, resource.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ResourceCostTable;
