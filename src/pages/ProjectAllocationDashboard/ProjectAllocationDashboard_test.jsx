
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ProjectAllocationDashboard from './ProjectAllocationDashboard';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('ProjectAllocationDashboard', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ projects: [] }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders project allocation dashboard component', () => {
    const { getByText } = render(<ProjectAllocationDashboard />);
    const headingElement = getByText('Project Allocation Dashboard');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders table with project details', () => {
    const projects = [
      {
        id: 1,
        name: 'Project 1',
        startDate: '2021-01-01',
        endDate: '2021-01-31',
        assignedTo: 'John Doe'
      },
      {
        id: 2,
        name: 'Project 2',
        startDate: '2021-02-01',
        endDate: '2021-02-28',
        assignedTo: 'Jane Smith'
      }
    ];

    useSelector.mockImplementation(callback => callback({ projects }));

    const { getByText } = render(<ProjectAllocationDashboard />);

    projects.forEach(project => {
      const nameElement = getByText(project.name);
      const startDateElement = getByText(project.startDate);
      const endDateElement = getByText(project.endDate);
      const assignedToElement = getByText(project.assignedTo);

      expect(nameElement).toBeInTheDocument();
      expect(startDateElement).toBeInTheDocument();
      expect(endDateElement).toBeInTheDocument();
      expect(assignedToElement).toBeInTheDocument();
    });
  });
});
