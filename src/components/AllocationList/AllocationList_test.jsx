import React from 'react';
import { render } from '@testing-library/react';
import AllocationList from './AllocationList';

describe('AllocationList', () => {
  test('renders allocation list component', () => {
    const { getByText } = render(<AllocationList />);
    
    // Assert that the component renders the table header
    expect(getByText('Employee')).toBeInTheDocument();
    expect(getByText('Start Date')).toBeInTheDocument();
    expect(getByText('End Date')).toBeInTheDocument();
    expect(getByText('Role')).toBeInTheDocument();
    expect(getByText('% Allocation')).toBeInTheDocument();
  });

  test('renders allocation data', () => {
    const allocations = [
      {
        id: 1,
        employee: 'John Doe',
        startDate: '2021-01-01',
        endDate: '2021-12-31',
        role: 'Developer',
        allocationPercentage: 80,
      },
      {
        id: 2,
        employee: 'Jane Smith',
        startDate: '2021-02-01',
        endDate: '2021-11-30',
        role: 'Designer',
        allocationPercentage: 60,
      },
    ];

    const { getByText } = render(<AllocationList />, {
      initialState: { allocations },
    });

    // Assert that the component renders the allocation data
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('2021-01-01')).toBeInTheDocument();
    expect(getByText('2021-12-31')).toBeInTheDocument();
    expect(getByText('Developer')).toBeInTheDocument();
    expect(getByText('80')).toBeInTheDocument();

    expect(getByText('Jane Smith')).toBeInTheDocument();
    expect(getByText('2021-02-01')).toBeInTheDocument();
    expect(getByText('2021-11-30')).toBeInTheDocument();
    expect(getByText('Designer')).toBeInTheDocument();
    expect(getByText('60')).toBeInTheDocument();
  });
});
