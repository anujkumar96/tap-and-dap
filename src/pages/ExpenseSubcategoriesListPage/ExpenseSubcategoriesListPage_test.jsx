
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseSubcategoriesListPage from './ExpenseSubcategoriesListPage';
import { fetchExpenseSubcategories } from 'actions/expenseSubcategoryActions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('actions/expenseSubcategoryActions', () => ({
  fetchExpenseSubcategories: jest.fn()
}));

describe('ExpenseSubcategoriesListPage', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchExpenseSubcategories.mockClear();
  });

  test('renders expense subcategories list', () => {
    const expenseSubcategories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' }
    ];
    useSelector.mockReturnValue(expenseSubcategories);
    useDispatch.mockReturnValue(jest.fn());

    render(<ExpenseSubcategoriesListPage />);

    expect(screen.getByText('Expense Subcategories')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
    expect(screen.getByText('Category 3')).toBeInTheDocument();
  });

  test('dispatches fetchExpenseSubcategories action on mount', () => {
    useSelector.mockReturnValue([]);
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(<ExpenseSubcategoriesListPage />);

    expect(dispatch).toHaveBeenCalledWith(fetchExpenseSubcategories());
  });
});
