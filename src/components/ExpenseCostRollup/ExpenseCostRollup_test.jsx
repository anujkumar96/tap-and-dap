
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ExpenseCostRollup from './ExpenseCostRollup';
import store from './store';

describe('ExpenseCostRollup', () => {
  it('renders expense data correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ExpenseCostRollup />
      </Provider>
    );

    expect(getByText('Expense Cost Rollup')).toBeInTheDocument();
    expect(getByText('January')).toBeInTheDocument();
    expect(getByText('1000')).toBeInTheDocument();
    expect(getByText('February')).toBeInTheDocument();
    expect(getByText('1500')).toBeInTheDocument();
    expect(getByText('March')).toBeInTheDocument();
    expect(getByText('2000')).toBeInTheDocument();
  });
});
