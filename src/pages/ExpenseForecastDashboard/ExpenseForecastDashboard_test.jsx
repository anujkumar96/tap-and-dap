import React from 'react';
import { render } from '@testing-library/react';
import ExpenseForecastDashboard from './ExpenseForecastDashboard';

describe('ExpenseForecastDashboard', () => {
  it('should render Expense Forecast Dashboard component', () => {
    const { getByText } = render(<ExpenseForecastDashboard />);
    
    // Assert that the component renders the title
    expect(getByText('Expense Forecast Dashboard')).toBeInTheDocument();
  });

  it('should render expense categories and subcategories', () => {
    const expenseForecastData = [
      {
        name: 'Category 1',
        subcategories: [
          { name: 'Subcategory 1', amount: 100 },
          { name: 'Subcategory 2', amount: 200 }
        ]
      },
      {
        name: 'Category 2',
        subcategories: [
          { name: 'Subcategory 3', amount: 300 },
          { name: 'Subcategory 4', amount: 400 }
        ]
      }
    ];

    const { getByText } = render(<ExpenseForecastDashboard />, {
      initialState: { expenseForecastData }
    });

    // Assert that the component renders the category names
    expect(getByText('Category 1')).toBeInTheDocument();
    expect(getByText('Category 2')).toBeInTheDocument();

    // Assert that the component renders the subcategory names and amounts
    expect(getByText('Subcategory 1')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
    expect(getByText('Subcategory 2')).toBeInTheDocument();
    expect(getByText('200')).toBeInTheDocument();
    expect(getByText('Subcategory 3')).toBeInTheDocument();
    expect(getByText('300')).toBeInTheDocument();
    expect(getByText('Subcategory 4')).toBeInTheDocument();
    expect(getByText('400')).toBeInTheDocument();
  });
});
