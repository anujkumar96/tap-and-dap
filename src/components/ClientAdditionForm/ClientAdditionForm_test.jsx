
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
    expect(getByLabelText('Point of Contact')).toBeInTheDocument();
    expect(getByLabelText('Sales Point of Contact')).toBeInTheDocument();
    expect(getByLabelText('Contact Number')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Description')).toBeInTheDocument();
    expect(getByLabelText('Country')).toBeInTheDocument();
    expect(getByLabelText('Currency')).toBeInTheDocument();
    expect(getByLabelText('Payment Term')).toBeInTheDocument();
    expect(getByText('Add Client')).toBeInTheDocument();
  });

  it('should dispatch addClient action on form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Test Client' } });
    fireEvent.change(getByLabelText('Point of Contact'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Sales Point of Contact'), { target: { value: 'Jane Smith' } });
    fireEvent.change(getByLabelText('Contact Number'), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Test description' } });
    fireEvent.change(getByLabelText('Country'), { target: { value: 'USA' } });
    fireEvent.change(getByLabelText('Currency'), { target: { value: 'USD' } });
    fireEvent.change(getByLabelText('Payment Term'), { target: { value: 'Net 30' } });

    fireEvent.click(getByText('Add Client'));

    expect(store.dispatch).toHaveBeenCalledWith(
      addClient({
        name: 'Test Client',
        pointOfContact: 'John Doe',
        salesPointOfContact: 'Jane Smith',
        contactNumber: '1234567890',
        email: 'test@example.com',
        description: 'Test description',
        country: 'USA',
        currency: 'USD',
        paymentTerm: 'Net 30'
      })
    );
  });
});
