
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LastWorkingDayForm from './LastWorkingDayForm';
import { setLastWorkingDay } from '../actions/employeeActions';

const mockStore = configureStore([]);

describe('LastWorkingDayForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <LastWorkingDayForm />
      </Provider>
    );
  });

  it('should dispatch setLastWorkingDay action on form submission', () => {
    const { getByLabelText, getByText } = component;

    const dateInput = getByLabelText('Last Working Day');
    const submitButton = getByText('Submit');

    fireEvent.change(dateInput, { target: { value: '2021-12-31' } });
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledWith(setLastWorkingDay('2021-12-31'));
  });

  it('should clear the input field after form submission', () => {
    const { getByLabelText, getByText } = component;

    const dateInput = getByLabelText('Last Working Day');
    const submitButton = getByText('Submit');

    fireEvent.change(dateInput, { target: { value: '2021-12-31' } });
    fireEvent.click(submitButton);

    expect(dateInput.value).toBe('');
  });
});
