
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ClientListPage from './ClientListPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ClientListPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      clients: [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210' },
      ],
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders client list page', () => {
    const { getByText } = render(<ClientListPage />);
    
    expect(getByText('Client List')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Phone')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('john@example.com')).toBeInTheDocument();
    expect(getByText('1234567890')).toBeInTheDocument();
    expect(getByText('Jane Smith')).toBeInTheDocument();
    expect(getByText('jane@example.com')).toBeInTheDocument();
    expect(getByText('9876543210')).toBeInTheDocument();
  });
});
