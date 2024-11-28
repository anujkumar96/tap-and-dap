
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import store from './store';

describe('Dashboard', () => {
  test('renders dashboard component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    const dashboardTitle = getByText('Dashboard');
    expect(dashboardTitle).toBeInTheDocument();
  });

  test('renders allocated resources', () => {
    const allocatedResources = [
      { id: 1, name: 'Resource 1', project: 'Project 1', allocation: 50 },
      { id: 2, name: 'Resource 2', project: 'Project 2', allocation: 75 },
    ];

    const { getByText } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    allocatedResources.forEach(resource => {
      const resourceName = getByText(resource.name);
      const resourceProject = getByText(`Project: ${resource.project}`);
      const resourceAllocation = getByText(`Allocation: ${resource.allocation}`);

      expect(resourceName).toBeInTheDocument();
      expect(resourceProject).toBeInTheDocument();
      expect(resourceAllocation).toBeInTheDocument();
    });
  });
});
