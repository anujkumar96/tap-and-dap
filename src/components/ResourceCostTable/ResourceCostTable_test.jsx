
// Import necessary dependencies
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResourceCostTable from './ResourceCostTable';
import { updateResourceCost } from './actions/resourceActions';

// Create a mock store
const mockStore = configureStore([]);

describe('ResourceCostTable', () => {
  let store;
  let component;

  beforeEach(() => {
    // Initialize the mock store
    store = mockStore({
      resourceCosts: [
        { id: 1, name: 'Resource 1', cost: 10 },
        { id: 2, name: 'Resource 2', cost: 20 },
      ],
    });

    // Render the component with the mock store
    component = render(
      <Provider store={store}>
        <ResourceCostTable />
      </Provider>
    );
  });

  it('should render the table with correct resource costs', () => {
    // Get the table element
    const table = component.getByRole('table');

    // Get the table rows
    const rows = component.getAllByRole('row');

    // Check if the table has correct number of rows
    expect(rows.length).toBe(3); // Including the table header row

    // Check if the table has correct resource names and costs
    expect(rows[1]).toHaveTextContent('Resource 1');
    expect(rows[1]).toHaveTextContent('10');
    expect(rows[2]).toHaveTextContent('Resource 2');
    expect(rows[2]).toHaveTextContent('20');
  });

  it('should update resource cost on input change', () => {
    // Get the input element for the first resource
    const input = component.getByDisplayValue('10');

    // Simulate input change event
    fireEvent.change(input, { target: { value: '15' } });

    // Check if the updateResourceCost action is dispatched with correct arguments
    expect(store.getActions()).toEqual([
      updateResourceCost(1, '15'),
    ]);
  });
});
