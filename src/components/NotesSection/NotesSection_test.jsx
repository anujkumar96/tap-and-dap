
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NotesSection from './NotesSection';
import { addNote } from '../actions/noteActions';

const mockStore = configureStore([]);

describe('NotesSection', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <NotesSection />
      </Provider>
    );
  });

  it('should render the NotesSection component', () => {
    const { getByText, getByLabelText } = component;

    expect(getByText('Notes Section')).toBeInTheDocument();
    expect(getByLabelText('Add Note:')).toBeInTheDocument();
    expect(getByText('Add Note')).toBeInTheDocument();
  });

  it('should dispatch addNote action when Add Note button is clicked', () => {
    const { getByText, getByLabelText } = component;
    const noteInput = getByLabelText('Add Note:');
    const addButton = getByText('Add Note');

    fireEvent.change(noteInput, { target: { value: 'Test note' } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addNote('Test note'));
  });
});
