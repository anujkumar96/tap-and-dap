
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RevenueForecastForm from './RevenueForecastForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('RevenueForecastForm', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders form with correct inputs', () => {
    const { getByLabelText, getByText } = render(<RevenueForecastForm />);
    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const addButton = getByText('Add');

    expect(nameInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('dispatches addRevenueForecast action on form submission', () => {
    const { getByLabelText, getByText } = render(<RevenueForecastForm />);
    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const addButton = getByText('Add');

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(addButton);

    expect(dispatch).toHaveBeenCalledWith(addRevenueForecast('Test Name', '100'));
    expect(nameInput.value).toBe('');
    expect(amountInput.value).toBe('');
  });

  test('dispatches editRevenueForecast action on form submission in edit mode', () => {
    const forecast = {
      id: 1,
      name: 'Test Name',
      amount: '100',
    };

    const { getByLabelText, getByText } = render(
      <RevenueForecastForm forecast={forecast} editMode={true} />
    );
    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const saveButton = getByText('Save');

    fireEvent.change(nameInput, { target: { value: 'Updated Name' } });
    fireEvent.change(amountInput, { target: { value: '200' } });
    fireEvent.click(saveButton);

    expect(dispatch).toHaveBeenCalledWith(
      editRevenueForecast(1, 'Updated Name', '200')
    );
    expect(nameInput.value).toBe('');
    expect(amountInput.value).toBe('');
  });
});
