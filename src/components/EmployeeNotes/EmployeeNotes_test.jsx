
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EmployeeNotes from './EmployeeNotes';
import { addEmployeeNote } from '../actions/employeeActions';

const mockStore = configureStore([]);

describe('EmployeeNotes', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <EmployeeNotes employeeId={1} month="January" />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch addEmployeeNote action on form submission', () => {
    const noteInput = component.getByPlaceholderText('Enter note');
    const saveButton = component.getByText('Save Note');

    fireEvent.change(noteInput, { target: { value: 'Test note' } });
    fireEvent.click(saveButton);

    expect(store.dispatch).toHaveBeenCalledWith(addEmployeeNote(1, 'January', 'Test note'));
  });

  it('should clear the note input after form submission', () => {
    const noteInput = component.getByPlaceholderText('Enter note');
    const saveButton = component.getByText('Save Note');

    fireEvent.change(noteInput, { target: { value: 'Test note' } });
    fireEvent.click(saveButton);

    expect(noteInput.value).toBe('');
  });
});
