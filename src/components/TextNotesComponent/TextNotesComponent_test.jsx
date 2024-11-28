
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import TextNotesComponent from './TextNotesComponent';
import { deleteNote } from '../actions/noteActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../actions/noteActions', () => ({
  deleteNote: jest.fn(),
}));

describe('TextNotesComponent', () => {
  const note = {
    id: 1,
    title: 'Test Note',
    content: 'This is a test note',
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders note title and content', () => {
    const { getByText } = render(<TextNotesComponent note={note} />);
    const titleElement = getByText(note.title);
    const contentElement = getByText(note.content);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  test('calls deleteNote action when delete button is clicked', () => {
    const { getByText } = render(<TextNotesComponent note={note} />);
    const deleteButton = getByText('Delete');

    fireEvent.click(deleteButton);

    expect(deleteNote).toHaveBeenCalledWith(note.id);
  });
});
