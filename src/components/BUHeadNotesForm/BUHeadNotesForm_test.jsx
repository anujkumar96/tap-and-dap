
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BUHeadNotesForm from './BUHeadNotesForm';
import { addNote } from '../actions/notesActions';

const mockStore = configureStore([]);

describe('BUHeadNotesForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      notes: [],
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <BUHeadNotesForm />
      </Provider>
    );
  });

  it('should render the form', () => {
    const { getByLabelText, getByText } = component;

    expect(getByLabelText('Additional Notes')).toBeInTheDocument();
    expect(getByText('Add Note')).toBeInTheDocument();
  });

  it('should dispatch addNote action on form submission', () => {
    const { getByLabelText, getByText } = component;

    const noteInput = getByLabelText('Additional Notes');
    const addButton = getByText('Add Note');

    fireEvent.change(noteInput, { target: { value: 'Test note' } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addNote('Test note'));
  });
});
