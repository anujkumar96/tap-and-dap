
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ProjectDetailsPage from './ProjectDetailsPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ProjectDetailsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ project: { title: 'Test Project', description: 'Test Description', startDate: '2021-01-01', endDate: '2021-01-31', status: 'In Progress', owner: 'John Doe' } }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders project details correctly', () => {
    const { getByText } = render(<ProjectDetailsPage />);
    
    expect(getByText('Test Project')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('Start Date: 2021-01-01')).toBeInTheDocument();
    expect(getByText('End Date: 2021-01-31')).toBeInTheDocument();
    expect(getByText('Status: In Progress')).toBeInTheDocument();
    expect(getByText('Owner: John Doe')).toBeInTheDocument();
  });
});
