
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseCostForecastEditor from './ExpenseCostForecastEditor';
import { updateExpenseCost } from '../actions/expenseActions';

const mockStore = configureStore([]);

describe('ExpenseCostForecastEditor', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      expense: {
        cost: 0
      }
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ExpenseCostForecastEditor />
      </Provider>
    );
  });

  it('should render the expense cost label', () => {
    const { getByLabelText } = component;
    const expenseCostLabel = getByLabelText('Expense Cost');
    expect(expenseCostLabel).toBeInTheDocument();
  });

  it('should update the expense cost value when input is changed', () => {
    const { getByLabelText } = component;
    const expenseCostInput = getByLabelText('Expense Cost');
    fireEvent.change(expenseCostInput, { target: { value: '100' } });
    expect(store.dispatch).toHaveBeenCalledWith(updateExpenseCost('100'));
  });

  it('should render the save button', () => {
    const { getByText } = component;
    const saveButton = getByText('Save');
    expect(saveButton).toBeInTheDocument();
  });
});
