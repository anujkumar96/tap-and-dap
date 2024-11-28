
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ExpenseRollUpSummary from './ExpenseRollUpSummary';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('ExpenseRollUpSummary', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      expenses: [
        { category: 'Category 1', subcategory: 'Subcategory 1', amount: 100 },
        { category: 'Category 1', subcategory: 'Subcategory 2', amount: 200 },
        { category: 'Category 2', subcategory: 'Subcategory 1', amount: 150 },
        { category: 'Category 2', subcategory: 'Subcategory 2', amount: 250 },
        { category: 'Category 3', subcategory: 'Subcategory 1', amount: 300 },
        { category: 'Category 3', subcategory: 'Subcategory 2', amount: 400 },
      ]
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders expense roll-up summary correctly', () => {
    const { getByText } = render(<ExpenseRollUpSummary />);
    
    expect(getByText('Expense Roll-up Summary')).toBeInTheDocument();
    expect(getByText('Total Expense')).toBeInTheDocument();
    expect(getByText('Category Expenses')).toBeInTheDocument();
    expect(getByText('Subcategory Expenses')).toBeInTheDocument();
    expect(getByText('Category 1: 300')).toBeInTheDocument();
    expect(getByText('Category 2: 400')).toBeInTheDocument();
    expect(getByText('Category 3: 700')).toBeInTheDocument();
    expect(getByText('Subcategory 1: 550')).toBeInTheDocument();
    expect(getByText('Subcategory 2: 850')).toBeInTheDocument();
  });
});
