
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ExpenseSubcategoryActivationButton from './ExpenseSubcategoryActivationButton';
import { activateExpenseSubcategory, inactivateExpenseSubcategory } from '../actions/expenseSubcategoryActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../actions/expenseSubcategoryActions', () => ({
  activateExpenseSubcategory: jest.fn(),
  inactivateExpenseSubcategory: jest.fn(),
}));

describe('ExpenseSubcategoryActivationButton', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the button with correct variant and text', () => {
    const expenseSubcategory = {
      id: 1,
      active: true,
    };

    const { getByText } = render(<ExpenseSubcategoryActivationButton expenseSubcategory={expenseSubcategory} />);

    const button = getByText('Active');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-success');
  });

  it('should dispatch inactivateExpenseSubcategory action when the button is clicked and the expense subcategory is active', () => {
    const expenseSubcategory = {
      id: 1,
      active: true,
    };

    const { getByText } = render(<ExpenseSubcategoryActivationButton expenseSubcategory={expenseSubcategory} />);

    const button = getByText('Active');
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(inactivateExpenseSubcategory).toHaveBeenCalledWith(expenseSubcategory.id);
  });

  it('should dispatch activateExpenseSubcategory action when the button is clicked and the expense subcategory is inactive', () => {
    const expenseSubcategory = {
      id: 1,
      active: false,
    };

    const { getByText } = render(<ExpenseSubcategoryActivationButton expenseSubcategory={expenseSubcategory} />);

    const button = getByText('Inactive');
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(activateExpenseSubcategory).toHaveBeenCalledWith(expenseSubcategory.id);
  });
});
