
// MyComponent.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyComponent from './MyComponent';
import { incrementCounter, decrementCounter } from './actions';

const mockStore = configureStore([]);

describe('MyComponent', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      counter: 0,
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );
  });

  it('should render the counter value from the store', () => {
    const counterElement = component.getByText('Counter: 0');
    expect(counterElement).toBeInTheDocument();
  });

  it('should dispatch incrementCounter action when increment button is clicked', () => {
    const incrementButton = component.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(store.dispatch).toHaveBeenCalledWith(incrementCounter());
  });

  it('should dispatch decrementCounter action when decrement button is clicked', () => {
    const decrementButton = component.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(store.dispatch).toHaveBeenCalledWith(decrementCounter());
  });
});
