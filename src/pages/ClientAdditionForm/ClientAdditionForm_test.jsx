
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ClientAdditionForm from './ClientAdditionForm';
import { addClient } from '../actions/clientActions';

const mockStore = configureStore([]);

describe('ClientAdditionForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ClientAdditionForm />
      </Provider>
    );
  });

  it('should render the form correctly', () => {
    const { getByLabelText, getByText } = component;

    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Phone')).toBeInTheDocument();
    expect(getByText('Add Client')).toBeInTheDocument();
  });

  it('should update the name input value correctly', () => {
    const { getByLabelText } = component;
    const nameInput = getByLabelText('Name');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    expect(nameInput.value).toBe('John Doe');
  });

  it('should update the email input value correctly', () => {
    const { getByLabelText } = component;
    const emailInput = getByLabelText('Email');

    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('should update the phone input value correctly', () => {
    const { getByLabelText } = component;
    const phoneInput = getByLabelText('Phone');

    fireEvent.change(phoneInput, { target: { value: '1234567890' } });

    expect(phoneInput.value).toBe('1234567890');
  });

  it('should dispatch the addClient action on form submission', () => {
    const { getByLabelText, getByText } = component;
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const phoneInput = getByLabelText('Phone');
    const addButton = getByText('Add Client');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addClient({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890'
    }));
  });

  it('should clear the input fields on form submission', () => {
    const { getByLabelText, getByText } = component;
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const phoneInput = getByLabelText('Phone');
    const addButton = getByText('Add Client');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.click(addButton);

    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(phoneInput.value).toBe('');
  });
});
