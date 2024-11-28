
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import CollectionForecastForm from './CollectionForecastForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('CollectionForecastForm', () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  test('renders form inputs and button', () => {
    const { getByLabelText, getByText } = render(<CollectionForecastForm />);
    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const addButton = getByText('Add');

    expect(nameInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('dispatches addCollectionForecast action when form is submitted', () => {
    const { getByLabelText, getByText } = render(<CollectionForecastForm />);
    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const addButton = getByText('Add');

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(addButton);

    expect(dispatch).toHaveBeenCalledWith(addCollectionForecast('Test Name', '100'));
  });

  test('dispatches editCollectionForecast action when form is submitted in edit mode', () => {
    const forecast = { id: 1, name: 'Test Name', amount: '100' };
    const { getByLabelText, getByText } = render(
      <CollectionForecastForm forecast={forecast} editMode={true} />
    );
    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const saveButton = getByText('Save');

    fireEvent.change(nameInput, { target: { value: 'Updated Name' } });
    fireEvent.change(amountInput, { target: { value: '200' } });
    fireEvent.click(saveButton);

    expect(dispatch).toHaveBeenCalledWith(editCollectionForecast(1, 'Updated Name', '200'));
  });
});
