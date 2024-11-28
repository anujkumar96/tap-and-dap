
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddExpenseSubcategoryPage from './AddExpenseSubcategoryPage';
import { addExpenseSubcategory } from '../actions/expenseActions';

const mockStore = configureStore([]);

describe('AddExpenseSubcategoryPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <AddExpenseSubcategoryPage />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch addExpenseSubcategory action on form submission', () => {
    const nameInput = component.getByLabelText('Name');
    const descriptionInput = component.getByLabelText('Description');
    const addButton = component.getByText('Add Subcategory');

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addExpenseSubcategory({ name: 'Test Name', description: 'Test Description' }));
  });

  it('should clear the input fields on form submission', () => {
    const nameInput = component.getByLabelText('Name');
    const descriptionInput = component.getByLabelText('Description');
    const addButton = component.getByText('Add Subcategory');

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(addButton);

    expect(nameInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });
});
