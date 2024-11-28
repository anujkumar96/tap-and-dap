import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ExpenseCostForecastForm from './ExpenseCostForecastForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('ExpenseCostForecastForm', () => {
  const dispatchMock = jest.fn();
  useDispatch.mockReturnValue(dispatchMock);

  it('should render the form with the correct initial value', () => {
    const { getByLabelText } = render(
      <ExpenseCostForecastForm
        category="category"
        subcategory="subcategory"
        month="month"
        forecastedCost={100}
      />
    );

    const costInput = getByLabelText('Forecasted Cost');
    expect(costInput.value).toBe('100');
  });

  it('should update the cost value when input changes', () => {
    const { getByLabelText } = render(
      <ExpenseCostForecastForm
        category="category"
        subcategory="subcategory"
        month="month"
        forecastedCost={100}
      />
    );

    const costInput = getByLabelText('Forecasted Cost');
    fireEvent.change(costInput, { target: { value: '200' } });

    expect(costInput.value).toBe('200');
  });

  it('should dispatch the updateExpenseCost action when form is submitted', () => {
    const { getByLabelText, getByText } = render(
      <ExpenseCostForecastForm
        category="category"
        subcategory="subcategory"
        month="month"
        forecastedCost={100}
      />
    );

    const costInput = getByLabelText('Forecasted Cost');
    fireEvent.change(costInput, { target: { value: '200' } });

    const saveButton = getByText('Save');
    fireEvent.click(saveButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      updateExpenseCost('category', 'subcategory', 'month', '200')
    );
  });
});
