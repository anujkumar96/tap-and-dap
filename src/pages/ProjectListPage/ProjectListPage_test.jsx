
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProject } from '../actions/projectActions';
import ProjectListPage from './ProjectListPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('../actions/projectActions', () => ({
  selectProject: jest.fn()
}));

describe('ProjectListPage', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    selectProject.mockClear();
  });

  test('renders project list correctly', () => {
    const projects = [
      { id: 1, name: 'Project 1', description: 'Description 1' },
      { id: 2, name: 'Project 2', description: 'Description 2' }
    ];
    useSelector.mockReturnValue(projects);

    render(<ProjectListPage />);

    expect(screen.getByText('Project List')).toBeInTheDocument();
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('dispatches selectProject action on button click', () => {
    const projects = [
      { id: 1, name: 'Project 1', description: 'Description 1' },
      { id: 2, name: 'Project 2', description: 'Description 2' }
    ];
    useSelector.mockReturnValue(projects);

    render(<ProjectListPage />);

    fireEvent.click(screen.getByText('Allocate Resources'));

    expect(selectProject).toHaveBeenCalledTimes(1);
    expect(selectProject).toHaveBeenCalledWith(1); // Assuming the button is associated with the first project
  });
});
