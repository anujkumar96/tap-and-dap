
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ExpenseCategoryEditForm from './ExpenseCategoryEditForm';
import { updateExpenseCategory } from '../actions/expenseCategoryActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../actions/expenseCategoryActions', () => ({
  updateExpenseCategory: jest.fn(),
}));

describe('ExpenseCategoryEditForm', () => {
  const expenseCategory = {
    id: 1,
    name: 'Category 1',
    description: 'Description 1',
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders form with initial values', () => {
    const { getByLabelText, getByText } = render(
      <ExpenseCategoryEditForm expenseCategory={expenseCategory} />
    );

    const nameInput = getByLabelText('Name');
    const descriptionInput = getByLabelText('Description');
    const saveButton = getByText('Save');

    expect(nameInput.value).toBe(expenseCategory.name);
    expect(descriptionInput.value).toBe(expenseCategory.description);
    expect(saveButton).toBeInTheDocument();
  });

  test('dispatches updateExpenseCategory action on form submission', () => {
    const { getByLabelText, getByText } = render(
      <ExpenseCategoryEditForm expenseCategory={expenseCategory} />
    );

    const nameInput = getByLabelText('Name');
    const descriptionInput = getByLabelText('Description');
    const saveButton = getByText('Save');

    fireEvent.change(nameInput, { target: { value: 'Updated Category' } });
    fireEvent.change(descriptionInput, { target: { value: 'Updated Description' } });
    fireEvent.click(saveButton);

    expect(updateExpenseCategory).toHaveBeenCalledWith(
      expenseCategory.id,
      'Updated Category',
      'Updated Description'
    );
  });
});
