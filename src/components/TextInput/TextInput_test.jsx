
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TextInput from './TextInput';
import { updateTextInput } from '../actions';

const mockStore = configureStore([]);

describe('TextInput', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      clientName: 'John Doe',
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <TextInput label="Client Name" name="clientName" />
      </Provider>
    );
  });

  it('should render the label correctly', () => {
    const { getByText } = component;
    const labelElement = getByText('Client Name');
    expect(labelElement).toBeInTheDocument();
  });

  it('should render the input field correctly', () => {
    const { getByDisplayValue } = component;
    const inputElement = getByDisplayValue('John Doe');
    expect(inputElement).toBeInTheDocument();
  });

  it('should dispatch an action when input value changes', () => {
    const { getByDisplayValue } = component;
    const inputElement = getByDisplayValue('John Doe');
    fireEvent.change(inputElement, { target: { value: 'Jane Smith' } });
    expect(store.dispatch).toHaveBeenCalledWith(updateTextInput('clientName', 'Jane Smith'));
  });
});
