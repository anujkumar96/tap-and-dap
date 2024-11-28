import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ExpenseRollUpPage from './ExpenseRollUpPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ExpenseRollUpPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      expenses: [
        { id: 1, bu: 'BU1', category: 'Category1', subcategory: 'Subcategory1', forecast: 100 },
        { id: 2, bu: 'BU2', category: 'Category2', subcategory: 'Subcategory2', forecast: 200 },
        { id: 3, bu: 'BU3', category: 'Category3', subcategory: 'Subcategory3', forecast: 300 },
      ],
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders the expense roll up page correctly', () => {
    const { getByText } = render(<ExpenseRollUpPage />);
    
    expect(getByText('BU1')).toBeInTheDocument();
    expect(getByText('Category1')).toBeInTheDocument();
    expect(getByText('Subcategory1')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();

    expect(getByText('BU2')).toBeInTheDocument();
    expect(getByText('Category2')).toBeInTheDocument();
    expect(getByText('Subcategory2')).toBeInTheDocument();
    expect(getByText('200')).toBeInTheDocument();

    expect(getByText('BU3')).toBeInTheDocument();
    expect(getByText('Category3')).toBeInTheDocument();
    expect(getByText('Subcategory3')).toBeInTheDocument();
    expect(getByText('300')).toBeInTheDocument();
  });
});