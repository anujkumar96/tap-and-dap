
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import CollectionActualsForm from './CollectionActualsForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

describe('CollectionActualsForm', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders form with correct initial values', () => {
    const collectionActual = {
      amount: 100,
      date: '2021-01-01'
    };
    const isEditing = true;

    const { getByLabelText, getByText } = render(
      <CollectionActualsForm collectionActual={collectionActual} isEditing={isEditing} />
    );

    const amountInput = getByLabelText('Amount');
    const dateInput = getByLabelText('Date');
    const submitButton = getByText('Update');

    expect(amountInput.value).toBe('100');
    expect(dateInput.value).toBe('2021-01-01');
    expect(submitButton).toBeInTheDocument();
  });

  test('dispatches addCollectionActual action on form submission when not editing', () => {
    const collectionActual = {};
    const isEditing = false;

    const { getByLabelText, getByText } = render(
      <CollectionActualsForm collectionActual={collectionActual} isEditing={isEditing} />
    );

    const amountInput = getByLabelText('Amount');
    const dateInput = getByLabelText('Date');
    const submitButton = getByText('Add');

    fireEvent.change(amountInput, { target: { value: '200' } });
    fireEvent.change(dateInput, { target: { value: '2021-02-01' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'ADD_COLLECTION_ACTUAL',
      payload: {
        amount: '200',
        date: '2021-02-01'
      }
    });
  });

  test('dispatches editCollectionActual action on form submission when editing', () => {
    const collectionActual = {
      id: 1,
      amount: 100,
      date: '2021-01-01'
    };
    const isEditing = true;

    const { getByLabelText, getByText } = render(
      <CollectionActualsForm collectionActual={collectionActual} isEditing={isEditing} />
    );

    const amountInput = getByLabelText('Amount');
    const dateInput = getByLabelText('Date');
    const submitButton = getByText('Update');

    fireEvent.change(amountInput, { target: { value: '200' } });
    fireEvent.change(dateInput, { target: { value: '2021-02-01' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'EDIT_COLLECTION_ACTUAL',
      payload: {
        id: 1,
        amount: '200',
        date: '2021-02-01'
      }
    });
  });
});
