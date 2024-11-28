
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddNotesPage from './AddNotesPage';
import store from '../store';

describe('AddNotesPage', () => {
  test('renders Add Notes page', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <AddNotesPage />
      </Provider>
    );

    // Check if the page title is rendered
    expect(getByText('Add Notes')).toBeInTheDocument();

    // Check if the form inputs are rendered
    expect(getByLabelText('Employee')).toBeInTheDocument();
    expect(getByLabelText('Month')).toBeInTheDocument();
    expect(getByLabelText('Notes')).toBeInTheDocument();

    // Check if the submit button is rendered
    expect(getByText('Add Note')).toBeInTheDocument();
  });

  test('dispatches addNote action on form submission', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <AddNotesPage />
      </Provider>
    );

    // Fill in the form inputs
    fireEvent.change(getByLabelText('Employee'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Month'), { target: { value: 'January' } });
    fireEvent.change(getByLabelText('Notes'), { target: { value: 'Sample note' } });

    // Submit the form
    fireEvent.click(getByText('Add Note'));

    // Check if the addNote action is dispatched with the correct payload
    expect(store.getState().notes).toEqual([{ employee: 'John Doe', month: 'January', notes: 'Sample note' }]);
  });
});
