
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ResourceCostForecastDetailsPage from './ResourceCostForecastDetailsPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('ResourceCostForecastDetailsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ resourceCosts: [] }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders resource cost forecast details page', () => {
    const { getByText } = render(<ResourceCostForecastDetailsPage />);
    const headingElement = getByText('Resource Cost Forecast Details');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders table with resource costs', () => {
    const resourceCosts = [
      { resource: 'Resource 1', cost: 100 },
      { resource: 'Resource 2', cost: 200 }
    ];
    useSelector.mockImplementation(callback => callback({ resourceCosts }));

    const { getByText } = render(<ResourceCostForecastDetailsPage />);
    const resource1Element = getByText('Resource 1');
    const resource2Element = getByText('Resource 2');
    const cost1Element = getByText('100');
    const cost2Element = getByText('200');

    expect(resource1Element).toBeInTheDocument();
    expect(resource2Element).toBeInTheDocument();
    expect(cost1Element).toBeInTheDocument();
    expect(cost2Element).toBeInTheDocument();
  });
});
