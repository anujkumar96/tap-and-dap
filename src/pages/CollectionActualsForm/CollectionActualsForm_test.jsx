
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import CollectionActualsForm from './CollectionActualsForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
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

  test('renders the form correctly', () => {
    const { getByLabelText, getByText } = render(<CollectionActualsForm projectId="1" />);
    const amountInput = getByLabelText('Amount');
    const dateInput = getByLabelText('Date');
    const submitButton = getByText('Add Collection Actual');

    expect(amountInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('dispatches addCollectionActual action when submitting the form', () => {
    const { getByLabelText, getByText } = render(<CollectionActualsForm projectId="1" />);
    const amountInput = getByLabelText('Amount');
    const dateInput = getByLabelText('Date');
    const submitButton = getByText('Add Collection Actual');

    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith(addCollectionActual('1', '100', '2022-01-01'));
  });

  test('dispatches editCollectionActual action when submitting the form with collectionActual prop', () => {
    const collectionActual = {
      id: '1',
      amount: '100',
      date: '2022-01-01',
    };

    const { getByLabelText, getByText } = render(
      <CollectionActualsForm collectionActual={collectionActual} projectId="1" />
    );

    const amountInput = getByLabelText('Amount');
    const dateInput = getByLabelText('Date');
    const submitButton = getByText('Edit Collection Actual');

    fireEvent.change(amountInput, { target: { value: '200' } });
    fireEvent.change(dateInput, { target: { value: '2022-02-01' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith(editCollectionActual('1', '200', '2022-02-01'));
  });
});
