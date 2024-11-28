
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseSubcategoryList from './ExpenseSubcategoryList';
import { editExpenseSubcategory, toggleExpenseSubcategory } from '../actions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('ExpenseSubcategoryList', () => {
  const expenseSubcategories = [
    { id: 1, name: 'Subcategory 1', category: 'Category 1', description: 'Description 1', active: true },
    { id: 2, name: 'Subcategory 2', category: 'Category 2', description: 'Description 2', active: false }
  ];

  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ expenseSubcategories }));
    useDispatch.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test('renders expense subcategory list correctly', () => {
    const { getByText } = render(<ExpenseSubcategoryList />);

    expenseSubcategories.forEach(subcategory => {
      expect(getByText(subcategory.name)).toBeInTheDocument();
      expect(getByText(subcategory.category)).toBeInTheDocument();
      expect(getByText(subcategory.description)).toBeInTheDocument();
    });
  });

  test('dispatches editExpenseSubcategory action on edit button click', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(<ExpenseSubcategoryList />);

    expenseSubcategories.forEach(subcategory => {
      fireEvent.click(getByText('Edit'));
      expect(dispatch).toHaveBeenCalledWith(editExpenseSubcategory(subcategory.id));
    });
  });

  test('dispatches toggleExpenseSubcategory action on activate/inactivate button click', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(<ExpenseSubcategoryList />);

    expenseSubcategories.forEach(subcategory => {
      fireEvent.click(getByText(subcategory.active ? 'Active' : 'Inactive'));
      expect(dispatch).toHaveBeenCalledWith(toggleExpenseSubcategory(subcategory.id));
    });
  });
});
