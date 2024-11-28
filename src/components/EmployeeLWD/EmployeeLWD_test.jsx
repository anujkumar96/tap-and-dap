
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EmployeeLWD from './EmployeeLWD';
import { setLastWorkingDay } from '../actions/employeeActions';

const mockStore = configureStore([]);

describe('EmployeeLWD', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      lastWorkingDay: '',
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <EmployeeLWD />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update the lastWorkingDay state when input value changes', () => {
    const input = component.getByLabelText('Last Working Day:');
    fireEvent.change(input, { target: { value: '2021-12-31' } });

    expect(component.getByDisplayValue('2021-12-31')).toBeTruthy();
  });

  it('should dispatch setLastWorkingDay action when Mark LWD button is clicked', () => {
    const input = component.getByLabelText('Last Working Day:');
    fireEvent.change(input, { target: { value: '2021-12-31' } });

    const button = component.getByText('Mark LWD');
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(setLastWorkingDay('2021-12-31'));
  });
});
