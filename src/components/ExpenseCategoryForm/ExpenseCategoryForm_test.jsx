
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseCategoryForm from './ExpenseCategoryForm';
import { addExpenseCategory } from '../actions/expenseCategoryActions';

const mockStore = configureStore([]);

describe('ExpenseCategoryForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <ExpenseCategoryForm />
      </Provider>
    );
  });

  it('should render the form correctly', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = component;

    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter name')).toBeInTheDocument();
    expect(getByLabelText('Description')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter description')).toBeInTheDocument();
    expect(getByText('Add Category')).toBeInTheDocument();
  });

  it('should dispatch addExpenseCategory action on form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Category 1' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Description 1' } });
    fireEvent.click(getByText('Add Category'));

    expect(store.dispatch).toHaveBeenCalledWith(addExpenseCategory({ name: 'Category 1', description: 'Description 1' }));
  });

  it('should clear the form fields after form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Category 1' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Description 1' } });
    fireEvent.click(getByText('Add Category'));

    expect(getByLabelText('Name').value).toBe('');
    expect(getByLabelText('Description').value).toBe('');
  });
});
