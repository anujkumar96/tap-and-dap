
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
      expenseCosts: [],
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ExpenseCostForecastEditor />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update category state on category input change', () => {
    const categoryInput = component.getByLabelText('Category');
    fireEvent.change(categoryInput, { target: { value: 'Food' } });

    expect(categoryInput.value).toBe('Food');
  });

  it('should update subcategory state on subcategory input change', () => {
    const subcategoryInput = component.getByLabelText('Subcategory');
    fireEvent.change(subcategoryInput, { target: { value: 'Groceries' } });

    expect(subcategoryInput.value).toBe('Groceries');
  });

  it('should update cost state on cost input change', () => {
    const costInput = component.getByLabelText('Cost');
    fireEvent.change(costInput, { target: { value: '50' } });

    expect(costInput.value).toBe('50');
  });

  it('should dispatch updateExpenseCost action on save button click', () => {
    const saveButton = component.getByText('Save');
    const categoryInput = component.getByLabelText('Category');
    const subcategoryInput = component.getByLabelText('Subcategory');
    const costInput = component.getByLabelText('Cost');

    fireEvent.change(categoryInput, { target: { value: 'Food' } });
    fireEvent.change(subcategoryInput, { target: { value: 'Groceries' } });
    fireEvent.change(costInput, { target: { value: '50' } });
    fireEvent.click(saveButton);

    expect(store.dispatch).toHaveBeenCalledWith(updateExpenseCost('Food', 'Groceries', '50'));
  });
});
