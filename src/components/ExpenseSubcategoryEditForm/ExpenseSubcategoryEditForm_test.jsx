
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ExpenseSubcategoryEditForm from './ExpenseSubcategoryEditForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('ExpenseSubcategoryEditForm', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  const expenseSubcategory = {
    id: 1,
    category: 'Food',
    description: 'Groceries',
  };

  it('should render the form with initial values', () => {
    const { getByLabelText, getByText } = render(
      <ExpenseSubcategoryEditForm expenseSubcategory={expenseSubcategory} />
    );

    const categoryInput = getByLabelText('Category');
    const descriptionInput = getByLabelText('Description');
    const saveButton = getByText('Save');

    expect(categoryInput.value).toBe('Food');
    expect(descriptionInput.value).toBe('Groceries');
    expect(saveButton).toBeInTheDocument();
  });

  it('should update the category and description when input values change', () => {
    const { getByLabelText } = render(
      <ExpenseSubcategoryEditForm expenseSubcategory={expenseSubcategory} />
    );

    const categoryInput = getByLabelText('Category');
    const descriptionInput = getByLabelText('Description');

    fireEvent.change(categoryInput, { target: { value: 'Transportation' } });
    fireEvent.change(descriptionInput, { target: { value: 'Gas' } });

    expect(categoryInput.value).toBe('Transportation');
    expect(descriptionInput.value).toBe('Gas');
  });

  it('should dispatch the updateExpenseSubcategory action when the form is submitted', () => {
    const { getByText } = render(
      <ExpenseSubcategoryEditForm expenseSubcategory={expenseSubcategory} />
    );

    const saveButton = getByText('Save');

    fireEvent.click(saveButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_EXPENSE_SUBCATEGORY',
      payload: {
        id: 1,
        category: 'Food',
        description: 'Groceries',
      },
    });
  });
});
