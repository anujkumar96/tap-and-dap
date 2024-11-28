
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ClientForm from './ClientForm';
import { addClient } from '../actions/clientActions';

const mockStore = configureStore([]);

describe('ClientForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ClientForm />
      </Provider>
    );
  });

  it('should render the form correctly', () => {
    const { getByLabelText, getByText } = component;

    expect(getByLabelText('Client Name')).toBeInTheDocument();
    expect(getByLabelText('Client POC Name')).toBeInTheDocument();
    expect(getByLabelText('Client Sales POC Name')).toBeInTheDocument();
    expect(getByLabelText('Client Contact Number')).toBeInTheDocument();
    expect(getByLabelText('Client Contact Email')).toBeInTheDocument();
    expect(getByLabelText('Client Description')).toBeInTheDocument();
    expect(getByLabelText('Client Country')).toBeInTheDocument();
    expect(getByLabelText('Client Currency')).toBeInTheDocument();
    expect(getByLabelText('Client Payment Term')).toBeInTheDocument();
    expect(getByText('Add Client')).toBeInTheDocument();
  });

  it('should dispatch addClient action on form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Client Name'), { target: { value: 'Test Client' } });
    fireEvent.change(getByLabelText('Client POC Name'), { target: { value: 'Test POC' } });
    fireEvent.change(getByLabelText('Client Sales POC Name'), { target: { value: 'Test Sales POC' } });
    fireEvent.change(getByLabelText('Client Contact Number'), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText('Client Contact Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Client Description'), { target: { value: 'Test description' } });
    fireEvent.change(getByLabelText('Client Country'), { target: { value: 'Test Country' } });
    fireEvent.change(getByLabelText('Client Currency'), { target: { value: 'Test Currency' } });
    fireEvent.change(getByLabelText('Client Payment Term'), { target: { value: 'Test Payment Term' } });

    fireEvent.click(getByText('Add Client'));

    expect(store.dispatch).toHaveBeenCalledWith(addClient({
      clientName: 'Test Client',
      clientPOCName: 'Test POC',
      clientSalesPOCName: 'Test Sales POC',
      clientContactNumber: '1234567890',
      clientContactEmail: 'test@example.com',
      clientDescription: 'Test description',
      clientCountry: 'Test Country',
      clientCurrency: 'Test Currency',
      clientPaymentTerm: 'Test Payment Term'
    }));
  });

  it('should reset form fields after form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Client Name'), { target: { value: 'Test Client' } });
    fireEvent.change(getByLabelText('Client POC Name'), { target: { value: 'Test POC' } });
    fireEvent.change(getByLabelText('Client Sales POC Name'), { target: { value: 'Test Sales POC' } });
    fireEvent.change(getByLabelText('Client Contact Number'), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText('Client Contact Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Client Description'), { target: { value: 'Test description' } });
    fireEvent.change(getByLabelText('Client Country'), { target: { value: 'Test Country' } });
    fireEvent.change(getByLabelText('Client Currency'), { target: { value: 'Test Currency' } });
    fireEvent.change(getByLabelText('Client Payment Term'), { target: { value: 'Test Payment Term' } });

    fireEvent.click(getByText('Add Client'));

    expect(getByLabelText('Client Name').value).toBe('');
    expect(getByLabelText('Client POC Name').value).toBe('');
    expect(getByLabelText('Client Sales POC Name').value).toBe('');
    expect(getByLabelText('Client Contact Number').value).toBe('');
    expect(getByLabelText('Client Contact Email').value).toBe('');
    expect(getByLabelText('Client Description').value).toBe('');
    expect(getByLabelText('Client Country').value).toBe('');
    expect(getByLabelText('Client Currency').value).toBe('');
    expect(getByLabelText('Client Payment Term').value).toBe('');
  });
});
