
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import EmployeeBUNotes from './EmployeeBUNotes';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('EmployeeBUNotes', () => {
  const dispatchMock = jest.fn();
  useDispatch.mockReturnValue(dispatchMock);

  it('should render the component', () => {
    const { getByLabelText, getByText } = render(<EmployeeBUNotes employeeId="1" notes={[]} />);
    
    const notesLabel = getByLabelText('Notes');
    const saveButton = getByText('Save');

    expect(notesLabel).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  it('should update the newNote state when the input value changes', () => {
    const { getByLabelText } = render(<EmployeeBUNotes employeeId="1" notes={[]} />);
    const notesInput = getByLabelText('Notes');

    fireEvent.change(notesInput, { target: { value: 'Test note' } });

    expect(notesInput.value).toBe('Test note');
  });

  it('should dispatch the addNote action when the form is submitted', () => {
    const { getByLabelText, getByText } = render(<EmployeeBUNotes employeeId="1" notes={[]} />);
    const notesInput = getByLabelText('Notes');
    const saveButton = getByText('Save');

    fireEvent.change(notesInput, { target: { value: 'Test note' } });
    fireEvent.click(saveButton);

    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should clear the newNote state after submitting the form', () => {
    const { getByLabelText, getByText } = render(<EmployeeBUNotes employeeId="1" notes={[]} />);
    const notesInput = getByLabelText('Notes');
    const saveButton = getByText('Save');

    fireEvent.change(notesInput, { target: { value: 'Test note' } });
    fireEvent.click(saveButton);

    expect(notesInput.value).toBe('');
  });

  it('should render the notes list', () => {
    const notes = ['Note 1', 'Note 2', 'Note 3'];
    const { getByText } = render(<EmployeeBUNotes employeeId="1" notes={notes} />);
    
    notes.forEach((note) => {
      const noteElement = getByText(note);
      expect(noteElement).toBeInTheDocument();
    });
  });
});
