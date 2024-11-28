
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EditEmployeePage from './EditEmployeePage';
import { updateEmployee } from '../actions/employeeActions';

const mockStore = configureStore([]);

describe('EditEmployeePage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      employee: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890'
      }
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <EditEmployeePage employeeId={1} />
      </Provider>
    );
  });

  it('should render the EditEmployeePage component', () => {
    const { getByText, getByLabelText } = component;

    expect(getByText('Edit Employee')).toBeInTheDocument();
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Phone')).toBeInTheDocument();
    expect(getByText('Save')).toBeInTheDocument();
  });

  it('should update the name state when input value changes', () => {
    const { getByLabelText } = component;
    const nameInput = getByLabelText('Name');

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    expect(nameInput.value).toBe('Jane Doe');
  });

  it('should update the email state when input value changes', () => {
    const { getByLabelText } = component;
    const emailInput = getByLabelText('Email');

    fireEvent.change(emailInput, { target: { value: 'janedoe@example.com' } });

    expect(emailInput.value).toBe('janedoe@example.com');
  });

  it('should update the phone state when input value changes', () => {
    const { getByLabelText } = component;
    const phoneInput = getByLabelText('Phone');

    fireEvent.change(phoneInput, { target: { value: '9876543210' } });

    expect(phoneInput.value).toBe('9876543210');
  });

  it('should dispatch updateEmployee action when form is submitted', () => {
    const { getByLabelText, getByText } = component;
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const phoneInput = getByLabelText('Phone');
    const saveButton = getByText('Save');

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'janedoe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '9876543210' } });
    fireEvent.click(saveButton);

    expect(store.dispatch).toHaveBeenCalledWith(updateEmployee(1, {
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '9876543210'
    }));
  });
});
