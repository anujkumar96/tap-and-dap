
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ClientEditPage from './ClientEditPage';
import { updateClient } from '../actions/clientActions';

const mockStore = configureStore([]);

describe('ClientEditPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      client: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890'
      }
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ClientEditPage />
      </Provider>
    );
  });

  it('should render the component', () => {
    const { getByText, getByLabelText } = component;

    expect(getByText('Edit Client')).toBeInTheDocument();
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Phone')).toBeInTheDocument();
    expect(getByText('Save')).toBeInTheDocument();
  });

  it('should update the name input value', () => {
    const { getByLabelText } = component;
    const nameInput = getByLabelText('Name');

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    expect(nameInput.value).toBe('Jane Doe');
  });

  it('should update the email input value', () => {
    const { getByLabelText } = component;
    const emailInput = getByLabelText('Email');

    fireEvent.change(emailInput, { target: { value: 'janedoe@example.com' } });

    expect(emailInput.value).toBe('janedoe@example.com');
  });

  it('should update the phone input value', () => {
    const { getByLabelText } = component;
    const phoneInput = getByLabelText('Phone');

    fireEvent.change(phoneInput, { target: { value: '9876543210' } });

    expect(phoneInput.value).toBe('9876543210');
  });

  it('should dispatch the updateClient action on form submission', () => {
    const { getByLabelText, getByText } = component;
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const phoneInput = getByLabelText('Phone');
    const saveButton = getByText('Save');

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'janedoe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '9876543210' } });
    fireEvent.click(saveButton);

    expect(store.dispatch).toHaveBeenCalledWith(updateClient({
      id: 1,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '9876543210'
    }));
  });
});
