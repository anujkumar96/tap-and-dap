
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseCostForecastList from './ExpenseCostForecastList';
import { editForecast } from '../actions/expenseActions';

const mockStore = configureStore([]);

describe('ExpenseCostForecastList', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      expenseCostForecast: [
        { category: 'Category 1', subcategory: 'Subcategory 1', month: 'January', forecastedCost: 100 },
        { category: 'Category 1', subcategory: 'Subcategory 1', month: 'February', forecastedCost: 150 },
        { category: 'Category 1', subcategory: 'Subcategory 2', month: 'January', forecastedCost: 200 },
        { category: 'Category 1', subcategory: 'Subcategory 2', month: 'February', forecastedCost: 250 },
        { category: 'Category 2', subcategory: 'Subcategory 1', month: 'January', forecastedCost: 300 },
        { category: 'Category 2', subcategory: 'Subcategory 1', month: 'February', forecastedCost: 350 },
        { category: 'Category 2', subcategory: 'Subcategory 2', month: 'January', forecastedCost: 400 },
        { category: 'Category 2', subcategory: 'Subcategory 2', month: 'February', forecastedCost: 450 },
      ]
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ExpenseCostForecastList />
      </Provider>
    );
  });

  it('should render the table with correct data', () => {
    const { getByText } = component;

    expect(getByText('Category 1')).toBeInTheDocument();
    expect(getByText('Subcategory 1')).toBeInTheDocument();
    expect(getByText('January')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
    expect(getByText('Edit')).toBeInTheDocument();
  });

  it('should dispatch editForecast action when edit button is clicked', () => {
    const { getByText } = component;

    fireEvent.click(getByText('Edit'));

    expect(store.dispatch).toHaveBeenCalledWith(editForecast('Category 1', 'Subcategory 1', 'January'));
  });
});
