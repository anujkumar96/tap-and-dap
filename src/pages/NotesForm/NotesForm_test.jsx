
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NotesForm from './NotesForm';
import { addNote } from '../actions/notesActions';

const mockStore = configureStore([]);

describe('NotesForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <NotesForm />
      </Provider>
    );
  });

  it('should render the form correctly', () => {
    const { getByLabelText, getByText } = component;

    expect(getByLabelText('Add Note')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
  });

  it('should dispatch addNote action on form submission', () => {
    const { getByLabelText, getByText } = component;

    const input = getByLabelText('Add Note');
    const button = getByText('Add');

    fireEvent.change(input, { target: { value: 'Test note' } });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(addNote('Test note'));
  });
});
