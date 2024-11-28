
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MonthlyExpenseForecastPage from './MonthlyExpenseForecastPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('MonthlyExpenseForecastPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      monthlyExpenseForecast: [
        { month: 'January', amount: 1000 },
        { month: 'February', amount: 1500 },
        { month: 'March', amount: 1200 },
      ]
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders Monthly Expense Forecast page', () => {
    const { getByText } = render(<MonthlyExpenseForecastPage />);
    const headingElement = getByText('Monthly Expense Forecast');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders table with correct data', () => {
    const { getByText } = render(<MonthlyExpenseForecastPage />);
    const januaryMonthElement = getByText('January');
    const januaryAmountElement = getByText('1000');
    const februaryMonthElement = getByText('February');
    const februaryAmountElement = getByText('1500');
    const marchMonthElement = getByText('March');
    const marchAmountElement = getByText('1200');

    expect(januaryMonthElement).toBeInTheDocument();
    expect(januaryAmountElement).toBeInTheDocument();
    expect(februaryMonthElement).toBeInTheDocument();
    expect(februaryAmountElement).toBeInTheDocument();
    expect(marchMonthElement).toBeInTheDocument();
    expect(marchAmountElement).toBeInTheDocument();
  });
});
