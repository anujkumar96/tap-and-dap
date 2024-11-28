
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ResourceCostForecastTable from './ResourceCostForecastTable';
import store from './store';

describe('ResourceCostForecastTable', () => {
  test('renders table with resource costs', () => {
    const resourceCosts = [
      { client: 'Client 1', project: 'Project 1', resource: 'Resource 1', cost: 100 },
      { client: 'Client 2', project: 'Project 2', resource: 'Resource 2', cost: 200 },
    ];

    const { getByText } = render(
      <Provider store={store}>
        <ResourceCostForecastTable />
      </Provider>
    );

    resourceCosts.forEach(resourceCost => {
      expect(getByText(resourceCost.client)).toBeInTheDocument();
      expect(getByText(resourceCost.project)).toBeInTheDocument();
      expect(getByText(resourceCost.resource)).toBeInTheDocument();
      expect(getByText(resourceCost.cost.toString())).toBeInTheDocument();
    });
  });
});
