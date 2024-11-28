
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ForecastExpenseCostDashboard from './ForecastExpenseCostDashboard';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ForecastExpenseCostDashboard', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      forecastedExpenses: {
        total: 1000,
        categories: [
          { id: 1, name: 'Category 1', amount: 500 },
          { id: 2, name: 'Category 2', amount: 300 },
          { id: 3, name: 'Category 3', amount: 200 },
        ],
      },
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders the component', () => {
    render(<ForecastExpenseCostDashboard />);
  });

  test('displays the total forecasted expenses', () => {
    const { getByText } = render(<ForecastExpenseCostDashboard />);
    const totalExpenses = getByText('Total Forecasted Expenses');
    const amount = getByText('1000');
    expect(totalExpenses).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
  });

  test('displays the category-wise forecasted expenses', () => {
    const { getByText } = render(<ForecastExpenseCostDashboard />);
    const category1 = getByText('Category 1: 500');
    const category2 = getByText('Category 2: 300');
    const category3 = getByText('Category 3: 200');
    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
    expect(category3).toBeInTheDocument();
  });
});
