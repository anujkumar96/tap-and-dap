
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import EmployeeListPage from './EmployeeListPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('EmployeeListPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      employees: [
        { id: 1, name: 'John Doe', position: 'Manager', department: 'Sales' },
        { id: 2, name: 'Jane Smith', position: 'Developer', department: 'IT' },
      ],
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders employee list correctly', () => {
    const { getByText } = render(<EmployeeListPage />);
    
    expect(getByText('Employee List')).toBeInTheDocument();
    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Position')).toBeInTheDocument();
    expect(getByText('Department')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Manager')).toBeInTheDocument();
    expect(getByText('Sales')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('Jane Smith')).toBeInTheDocument();
    expect(getByText('Developer')).toBeInTheDocument();
    expect(getByText('IT')).toBeInTheDocument();
  });
});
