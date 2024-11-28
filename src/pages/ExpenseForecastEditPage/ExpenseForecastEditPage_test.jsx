import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseForecastEditPage from '../ExpenseForecastEditPage';

const mockStore = configureStore([]);

describe('ExpenseForecastEditPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      expenseForecast: [
        { category: 'Category 1', subcategory: 'Subcategory 1', jan: 100, feb: 200, mar: 300, dec: 1200 },
        { category: 'Category 2', subcategory: 'Subcategory 2', jan: 150, feb: 250, mar: 350, dec: 1250 },
      ],
    });

    component = render(
      <Provider store={store}>
        <ExpenseForecastEditPage />
      </Provider>
    );
  });

  it('should render the expense forecast table', () => {
    const { getByText } = component;
    expect(getByText('Category')).toBeInTheDocument();
    expect(getByText('Subcategory')).toBeInTheDocument();
    expect(getByText('Jan')).toBeInTheDocument();
    expect(getByText('Feb')).toBeInTheDocument();
    expect(getByText('Mar')).toBeInTheDocument();
    expect(getByText('Dec')).toBeInTheDocument();
  });

  it('should update expense data when input value changes', () => {
    const { getByLabelText } = component;
    const janInput = getByLabelText('Jan');
    fireEvent.change(janInput, { target: { value: '500' } });
    expect(janInput.value).toBe('500');
  });

  it('should dispatch updateExpenseForecast action when save button is clicked', () => {
    const { getByText } = component;
    const saveButton = getByText('Save');
    fireEvent.click(saveButton);
    const actions = store.getActions();
    expect(actions[0].type).toBe('UPDATE_EXPENSE_FORECAST');
    expect(actions[0].payload).toEqual([
      { category: 'Category 1', subcategory: 'Subcategory 1', jan: 100, feb: 200, mar: 300, dec: 1200 },
      { category: 'Category 2', subcategory: 'Subcategory 2', jan: 150, feb: 250, mar: 350, dec: 1250 },
    ]);
  });
});
