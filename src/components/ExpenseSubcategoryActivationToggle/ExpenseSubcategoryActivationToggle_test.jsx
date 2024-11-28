
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseSubcategoryActivationToggle from './ExpenseSubcategoryActivationToggle';
import { toggleSubcategoryActivation } from '../actions/subcategoryActions';

const mockStore = configureStore([]);

describe('ExpenseSubcategoryActivationToggle', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      subcategories: {
        1: {
          isActive: true
        }
      }
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ExpenseSubcategoryActivationToggle subcategoryId={1} />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct button variant based on isActive prop', () => {
    const button = component.getByRole('button');
    expect(button).toHaveClass('btn-success');

    store = mockStore({
      subcategories: {
        1: {
          isActive: false
        }
      }
    });

    component.rerender(
      <Provider store={store}>
        <ExpenseSubcategoryActivationToggle subcategoryId={1} />
      </Provider>
    );

    expect(button).toHaveClass('btn-danger');
  });

  it('should dispatch toggleSubcategoryActivation action when button is clicked', () => {
    const button = component.getByRole('button');
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(toggleSubcategoryActivation(1));
  });
});
