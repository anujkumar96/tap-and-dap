
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EmployeeNotesPage from './EmployeeNotesPage';
import { addNote, deleteNote } from './actions';

const mockStore = configureStore([]);

describe('EmployeeNotesPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      notes: ['Note 1', 'Note 2']
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <EmployeeNotesPage />
      </Provider>
    );
  });

  it('should render the Employee Notes Page', () => {
    expect(screen.getByText('Employee Notes Page')).toBeInTheDocument();
  });

  it('should render the existing notes', () => {
    expect(screen.getByText('Note 1')).toBeInTheDocument();
    expect(screen.getByText('Note 2')).toBeInTheDocument();
  });

  it('should dispatch addNote action when Add Note button is clicked', () => {
    const addNoteButton = screen.getByText('Add Note');
    fireEvent.click(addNoteButton);

    expect(store.dispatch).toHaveBeenCalledWith(addNote(expect.any(String)));
  });

  it('should dispatch deleteNote action when Delete button is clicked', () => {
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(store.dispatch).toHaveBeenCalledWith(deleteNote(0));
  });
});
