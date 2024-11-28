
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewNotesPage from './ViewNotesPage';
import { addNote } from '../actions/noteActions';

const mockStore = configureStore([]);

describe('ViewNotesPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      notes: ['Note 1', 'Note 2']
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ViewNotesPage />
      </Provider>
    );
  });

  it('should render the View Notes Page', () => {
    const { getByText } = component;
    expect(getByText('View Notes Page')).toBeInTheDocument();
  });

  it('should render the Add Note form', () => {
    const { getByLabelText, getByText } = component;
    expect(getByLabelText('Add Note')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
  });

  it('should dispatch the addNote action when Add button is clicked', () => {
    const { getByText, getByPlaceholderText } = component;
    const input = getByPlaceholderText('Enter note');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Note' } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addNote('New Note'));
  });

  it('should render the list of notes', () => {
    const { getByText } = component;
    expect(getByText('Notes:')).toBeInTheDocument();
    expect(getByText('Note 1')).toBeInTheDocument();
    expect(getByText('Note 2')).toBeInTheDocument();
  });
});
