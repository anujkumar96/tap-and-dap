import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ExpenseCostForecastDashboard from './ExpenseCostForecastDashboard';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ExpenseCostForecastDashboard', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ expenseCostForecast: [] }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render expense cards correctly', () => {
    const expenseCostForecast = [
      { category: 'Category 1', subcategory: 'Subcategory 1', cost: 100 },
      { category: 'Category 2', subcategory: 'Subcategory 2', cost: 200 },
    ];

    useSelector.mockImplementation(callback => callback({ expenseCostForecast }));

    const { getByText } = render(<ExpenseCostForecastDashboard />);

    expenseCostForecast.forEach(forecast => {
      expect(getByText(forecast.category)).toBeInTheDocument();
      expect(getByText(forecast.subcategory)).toBeInTheDocument();
      expect(getByText(`Forecasted Cost: ${forecast.cost}`)).toBeInTheDocument();
    });
  });
});
