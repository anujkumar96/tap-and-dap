
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import CollectionForecastForm from './CollectionForecastForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

describe('CollectionForecastForm', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders form with correct initial values', () => {
    const forecast = {
      name: 'Test Forecast',
      amount: 100
    };
    const { getByLabelText, getByText } = render(
      <CollectionForecastForm forecast={forecast} editMode={true} onClose={jest.fn()} />
    );

    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const saveButton = getByText('Save');

    expect(nameInput.value).toBe('Test Forecast');
    expect(amountInput.value).toBe('100');
    expect(saveButton).toBeInTheDocument();
  });

  test('dispatches addCollectionForecast action when form is submitted in add mode', () => {
    const { getByLabelText, getByText } = render(
      <CollectionForecastForm forecast={null} editMode={false} onClose={jest.fn()} />
    );

    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const addButton = getByText('Add');

    fireEvent.change(nameInput, { target: { value: 'New Forecast' } });
    fireEvent.change(amountInput, { target: { value: '200' } });
    fireEvent.click(addButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'ADD_COLLECTION_FORECAST',
      payload: {
        name: 'New Forecast',
        amount: '200'
      }
    });
  });

  test('dispatches editCollectionForecast action when form is submitted in edit mode', () => {
    const forecast = {
      id: 1,
      name: 'Test Forecast',
      amount: 100
    };
    const { getByLabelText, getByText } = render(
      <CollectionForecastForm forecast={forecast} editMode={true} onClose={jest.fn()} />
    );

    const nameInput = getByLabelText('Name');
    const amountInput = getByLabelText('Amount');
    const saveButton = getByText('Save');

    fireEvent.change(nameInput, { target: { value: 'Updated Forecast' } });
    fireEvent.change(amountInput, { target: { value: '150' } });
    fireEvent.click(saveButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'EDIT_COLLECTION_FORECAST',
      payload: {
        id: 1,
        name: 'Updated Forecast',
        amount: '150'
      }
    });
  });
});
