
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddExpenseCategoryPage from './AddExpenseCategoryPage';
import { addExpenseCategory } from '../actions/expenseActions';

const mockStore = configureStore([]);

describe('AddExpenseCategoryPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      expenseCategories: [],
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <AddExpenseCategoryPage />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch addExpenseCategory action on button click', () => {
    const { getByLabelText, getByText } = component;

    const categoryNameInput = getByLabelText('Category Name');
    fireEvent.change(categoryNameInput, { target: { value: 'Food' } });

    const addButton = getByText('Add Category');
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addExpenseCategory('Food'));
  });
});
