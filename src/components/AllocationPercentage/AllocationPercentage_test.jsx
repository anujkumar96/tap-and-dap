
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AllocationPercentage from './AllocationPercentage';
import { setAllocationPercentage } from './actions';

const mockStore = configureStore([]);

describe('AllocationPercentage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      allocationPercentage: 0
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <AllocationPercentage />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch setAllocationPercentage action on input change', () => {
    const input = component.getByLabelText('Allocation Percentage');

    fireEvent.change(input, { target: { value: '50' } });

    expect(store.dispatch).toHaveBeenCalledWith(setAllocationPercentage('50'));
  });
});
