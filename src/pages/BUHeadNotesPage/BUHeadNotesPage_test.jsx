
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BUHeadNotesPage from './BUHeadNotesPage';
import { addNote } from '../actions/notesActions';

const mockStore = configureStore([]);

describe('BUHeadNotesPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      notes: ['Note 1', 'Note 2']
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <BUHeadNotesPage />
      </Provider>
    );
  });

  it('should render the page heading', () => {
    const { getByText } = component;
    const heading = getByText('BU Head Notes Page');
    expect(heading).toBeInTheDocument();
  });

  it('should render the form to add a note', () => {
    const { getByLabelText, getByText } = component;
    const input = getByLabelText('Add Note');
    const button = getByText('Add');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should update the note state when input value changes', () => {
    const { getByLabelText } = component;
    const input = getByLabelText('Add Note');
    fireEvent.change(input, { target: { value: 'New Note' } });
    expect(input.value).toBe('New Note');
  });

  it('should dispatch addNote action when "Add" button is clicked', () => {
    const { getByText } = component;
    const button = getByText('Add');
    fireEvent.click(button);
    expect(store.dispatch).toHaveBeenCalledWith(addNote(''));
  });

  it('should render the notes', () => {
    const { getByText } = component;
    const note1 = getByText('Note 1');
    const note2 = getByText('Note 2');
    expect(note1).toBeInTheDocument();
    expect(note2).toBeInTheDocument();
  });
});
