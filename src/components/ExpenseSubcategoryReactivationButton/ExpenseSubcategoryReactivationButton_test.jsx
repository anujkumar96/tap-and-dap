
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ExpenseSubcategoryReactivationButton from './ExpenseSubcategoryReactivationButton';
import { reactivateExpenseSubcategory } from '../actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock('../actions', () => ({
  reactivateExpenseSubcategory: jest.fn()
}));

describe('ExpenseSubcategoryReactivationButton', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch reactivateExpenseSubcategory action on button click', () => {
    const subcategoryId = 1;
    const { getByText } = render(<ExpenseSubcategoryReactivationButton subcategoryId={subcategoryId} />);
    const button = getByText('Reactivate');
    fireEvent.click(button);
    expect(dispatch).toHaveBeenCalledWith(reactivateExpenseSubcategory(subcategoryId));
  });
});
