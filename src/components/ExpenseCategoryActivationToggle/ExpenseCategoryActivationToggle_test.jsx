
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseCategoryActivationToggle from './ExpenseCategoryActivationToggle';
import { toggleCategoryActivation } from '../actions/categoryActions';

const mockStore = configureStore([]);

describe('ExpenseCategoryActivationToggle', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      categories: {
        activeCategories: [1, 2, 3] // Mocking the active categories state
      }
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ExpenseCategoryActivationToggle categoryId={1} />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Active" if the category is active', () => {
    const { getByText } = component;
    const activeButton = getByText('Active');
    expect(activeButton).toBeTruthy();
  });

  it('should display "Inactive" if the category is inactive', () => {
    component.rerender(
      <Provider store={store}>
        <ExpenseCategoryActivationToggle categoryId={4} />
      </Provider>
    );

    const { getByText } = component;
    const inactiveButton = getByText('Inactive');
    expect(inactiveButton).toBeTruthy();
  });

  it('should dispatch toggleCategoryActivation action when the button is clicked', () => {
    const { getByText } = component;
    const button = getByText('Active');

    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(toggleCategoryActivation(1));
  });
});
