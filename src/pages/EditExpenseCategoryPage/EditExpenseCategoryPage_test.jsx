
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import EditExpenseCategoryPage from './EditExpenseCategoryPage';
import { updateExpenseCategory } from '../actions/expenseCategoryActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../actions/expenseCategoryActions', () => ({
  updateExpenseCategory: jest.fn(),
}));

describe('EditExpenseCategoryPage', () => {
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

  test('renders EditExpenseCategoryPage component', () => {
    render(<EditExpenseCategoryPage expenseCategory={expenseCategory} />);
  });

  test('updates name state on name input change', () => {
    const { getByLabelText } = render(
      <EditExpenseCategoryPage expenseCategory={expenseCategory} />
    );
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'New Category' } });
    expect(nameInput.value).toBe('New Category');
  });

  test('updates description state on description input change', () => {
    const { getByLabelText } = render(
      <EditExpenseCategoryPage expenseCategory={expenseCategory} />
    );
    const descriptionInput = getByLabelText('Description');
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
    expect(descriptionInput.value).toBe('New Description');
  });

  test('dispatches updateExpenseCategory action on form submit', () => {
    const { getByText } = render(
      <EditExpenseCategoryPage expenseCategory={expenseCategory} />
    );
    const saveButton = getByText('Save');
    fireEvent.click(saveButton);
    expect(updateExpenseCategory).toHaveBeenCalledWith(
      expenseCategory.id,
      expenseCategory.name,
      expenseCategory.description
    );
  });
});
