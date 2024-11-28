
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ResourceCostForecastDashboard from './ResourceCostForecastDashboard';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ResourceCostForecastDashboard', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders total forecasted cost correctly', () => {
    useSelector.mockReturnValue({ totalCost: 1000, breakdown: [] });

    const { getByText } = render(<ResourceCostForecastDashboard />);

    expect(getByText('Total Forecasted Cost:')).toBeInTheDocument();
    expect(getByText('1000')).toBeInTheDocument();
  });

  test('renders cost breakdown correctly', () => {
    useSelector.mockReturnValue({
      totalCost: 0,
      breakdown: [
        { id: 1, name: 'Item 1', cost: 100 },
        { id: 2, name: 'Item 2', cost: 200 },
      ],
    });

    const { getByText } = render(<ResourceCostForecastDashboard />);

    expect(getByText('Cost Breakdown:')).toBeInTheDocument();
    expect(getByText('Item 1: 100')).toBeInTheDocument();
    expect(getByText('Item 2: 200')).toBeInTheDocument();
  });
});
