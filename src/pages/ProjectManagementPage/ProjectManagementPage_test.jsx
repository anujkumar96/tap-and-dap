
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ProjectManagementPage from './ProjectManagementPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ProjectManagementPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      projects: [
        { id: 1, name: 'Project 1', description: 'Description 1' },
        { id: 2, name: 'Project 2', description: 'Description 2' },
        { id: 3, name: 'Project 3', description: 'Description 3' },
      ],
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders project management page', () => {
    const { getByText } = render(<ProjectManagementPage />);
    
    expect(getByText('Project Management Page')).toBeInTheDocument();
  });

  test('renders project cards', () => {
    const { getByText } = render(<ProjectManagementPage />);
    
    expect(getByText('Project 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Project 2')).toBeInTheDocument();
    expect(getByText('Description 2')).toBeInTheDocument();
    expect(getByText('Project 3')).toBeInTheDocument();
    expect(getByText('Description 3')).toBeInTheDocument();
  });
});
