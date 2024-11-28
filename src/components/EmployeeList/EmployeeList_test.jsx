
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EmployeeList from './EmployeeList';
import { filterEmployees } from '../actions/employeeActions';

const mockStore = configureStore([]);

describe('EmployeeList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      employees: [
        { id: 1, name: 'John Doe', businessUnit: 'Sales', projectAllocation: 'Project A' },
        { id: 2, name: 'Jane Smith', businessUnit: 'Marketing', projectAllocation: 'Project B' },
        { id: 3, name: 'Mike Johnson', businessUnit: 'Sales', projectAllocation: 'Project C' },
        { id: 4, name: 'Sarah Williams', businessUnit: 'HR', projectAllocation: 'Project D' },
        { id: 5, name: 'David Brown', businessUnit: 'Marketing', projectAllocation: 'Project E' }
      ],
      filteredEmployees: []
    });
  });

  test('renders EmployeeList component', () => {
    render(
      <Provider store={store}>
        <EmployeeList />
      </Provider>
    );

    expect(screen.getByText('Employee List')).toBeInTheDocument();
  });

  test('filters employees based on business unit', () => {
    render(
      <Provider store={store}>
        <EmployeeList />
      </Provider>
    );

    const businessUnitInput = screen.getByLabelText('Business Unit');
    const filterButton = screen.getByText('Filter');

    fireEvent.change(businessUnitInput, { target: { value: 'Sales' } });
    fireEvent.click(filterButton);

    expect(store.getActions()).toEqual([filterEmployees('Sales')]);
  });
});
