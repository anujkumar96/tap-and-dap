
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseSubcategoryForm from './ExpenseSubcategoryForm';
import { addExpenseSubcategory } from '../actions/expenseActions';

const mockStore = configureStore([]);

describe('ExpenseSubcategoryForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ExpenseSubcategoryForm />
      </Provider>
    );
  });

  it('should render the form correctly', () => {
    const { getByLabelText, getByText } = component;

    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Category')).toBeInTheDocument();
    expect(getByLabelText('Description')).toBeInTheDocument();
    expect(getByText('Add Subcategory')).toBeInTheDocument();
  });

  it('should dispatch addExpenseSubcategory action on form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Test Name' } });
    fireEvent.change(getByLabelText('Category'), { target: { value: 'Category 1' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Test Description' } });
    fireEvent.click(getByText('Add Subcategory'));

    expect(store.dispatch).toHaveBeenCalledWith(addExpenseSubcategory({
      name: 'Test Name',
      category: 'Category 1',
      description: 'Test Description',
    }));
  });

  it('should clear the form fields after form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Test Name' } });
    fireEvent.change(getByLabelText('Category'), { target: { value: 'Category 1' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Test Description' } });
    fireEvent.click(getByText('Add Subcategory'));

    expect(getByLabelText('Name').value).toBe('');
    expect(getByLabelText('Category').value).toBe('');
    expect(getByLabelText('Description').value).toBe('');
  });
});
