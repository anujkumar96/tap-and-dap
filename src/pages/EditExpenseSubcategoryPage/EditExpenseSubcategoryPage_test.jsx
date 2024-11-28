
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import EditExpenseSubcategoryPage from './EditExpenseSubcategoryPage';
import { updateExpenseSubcategory } from '../actions/expenseActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../actions/expenseActions', () => ({
  updateExpenseSubcategory: jest.fn(),
}));

describe('EditExpenseSubcategoryPage', () => {
  const expenseSubcategory = {
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

  test('renders the component', () => {
    render(<EditExpenseSubcategoryPage expenseSubcategory={expenseSubcategory} />);
  });

  test('updates the name state on input change', () => {
    const { getByLabelText } = render(<EditExpenseSubcategoryPage expenseSubcategory={expenseSubcategory} />);
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'New Name' } });
    expect(nameInput.value).toBe('New Name');
  });

  test('updates the description state on input change', () => {
    const { getByLabelText } = render(<EditExpenseSubcategoryPage expenseSubcategory={expenseSubcategory} />);
    const descriptionInput = getByLabelText('Description');
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
    expect(descriptionInput.value).toBe('New Description');
  });

  test('dispatches the updateExpenseSubcategory action on form submit', () => {
    const { getByText } = render(<EditExpenseSubcategoryPage expenseSubcategory={expenseSubcategory} />);
    const saveButton = getByText('Save');
    fireEvent.click(saveButton);
    expect(updateExpenseSubcategory).toHaveBeenCalledWith({
      id: expenseSubcategory.id,
      name: expenseSubcategory.name,
      description: expenseSubcategory.description,
    });
  });
});
