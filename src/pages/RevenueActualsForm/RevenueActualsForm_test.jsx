
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RevenueActualsForm from './RevenueActualsForm';
import { addRevenueActual, editRevenueActual } from '../actions/revenueActions';

const mockStore = configureStore([]);

describe('RevenueActualsForm', () => {
  let store;
  let component;
  const revenueActual = {
    id: 1,
    revenue: 1000,
    date: '2021-01-01',
  };
  const isEditing = false;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <RevenueActualsForm revenueActual={revenueActual} isEditing={isEditing} />
      </Provider>
    );
  });

  it('should render the form correctly', () => {
    const { getByLabelText, getByText } = component;

    expect(getByLabelText('Revenue')).toBeInTheDocument();
    expect(getByLabelText('Date')).toBeInTheDocument();
    expect(getByText('Add Revenue')).toBeInTheDocument();
  });

  it('should dispatch addRevenueActual action when submitting the form', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Revenue'), { target: { value: '2000' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2021-02-01' } });
    fireEvent.click(getByText('Add Revenue'));

    expect(store.dispatch).toHaveBeenCalledWith(addRevenueActual('2000', '2021-02-01'));
    expect(getByLabelText('Revenue').value).toBe('');
    expect(getByLabelText('Date').value).toBe('');
  });

  it('should dispatch editRevenueActual action when submitting the form in edit mode', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Revenue'), { target: { value: '3000' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2021-03-01' } });
    fireEvent.click(getByText('Edit Revenue'));

    expect(store.dispatch).toHaveBeenCalledWith(editRevenueActual(1, '3000', '2021-03-01'));
    expect(getByLabelText('Revenue').value).toBe('');
    expect(getByLabelText('Date').value).toBe('');
  });
});
