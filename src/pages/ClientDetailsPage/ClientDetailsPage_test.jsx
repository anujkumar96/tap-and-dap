
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ClientDetailsPage from './ClientDetailsPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ClientDetailsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ client: { name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St' } }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders client details correctly', () => {
    const { getByText } = render(<ClientDetailsPage />);
    
    expect(getByText('Client Details')).toBeInTheDocument();
    expect(getByText('Name: John Doe')).toBeInTheDocument();
    expect(getByText('Email: johndoe@example.com')).toBeInTheDocument();
    expect(getByText('Phone: 1234567890')).toBeInTheDocument();
    expect(getByText('Address: 123 Main St')).toBeInTheDocument();
  });
});
