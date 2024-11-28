
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RevenueForecastForm from './RevenueForecastForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('RevenueForecastForm', () => {
  const dispatchMock = jest.fn();
  useDispatch.mockReturnValue(dispatchMock);

  beforeEach(() => {
    dispatchMock.mockClear();
  });

  test('renders form with correct inputs', () => {
    const { getByLabelText, getByText } = render(<RevenueForecastForm />);
    const revenueInput = getByLabelText('Revenue');
    const dateInput = getByLabelText('Date');
    const addButton = getByText('Add');

    expect(revenueInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('dispatches addRevenueForecast action on form submission', () => {
    const { getByLabelText, getByText } = render(<RevenueForecastForm />);
    const revenueInput = getByLabelText('Revenue');
    const dateInput = getByLabelText('Date');
    const addButton = getByText('Add');

    fireEvent.change(revenueInput, { target: { value: '1000' } });
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    fireEvent.click(addButton);

    expect(dispatchMock).toHaveBeenCalledWith(addRevenueForecast('1000', '2022-01-01'));
  });

  test('dispatches editRevenueForecast action on form submission in edit mode', () => {
    const forecast = {
      id: 1,
      revenue: '2000',
      date: '2022-02-01',
    };
    const { getByLabelText, getByText } = render(
      <RevenueForecastForm forecast={forecast} editMode={true} />
    );
    const revenueInput = getByLabelText('Revenue');
    const dateInput = getByLabelText('Date');
    const saveButton = getByText('Save');

    fireEvent.change(revenueInput, { target: { value: '3000' } });
    fireEvent.change(dateInput, { target: { value: '2022-03-01' } });
    fireEvent.click(saveButton);

    expect(dispatchMock).toHaveBeenCalledWith(editRevenueForecast(1, '3000', '2022-03-01'));
  });
});
