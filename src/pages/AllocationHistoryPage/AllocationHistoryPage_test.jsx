
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import AllocationHistoryPage from './AllocationHistoryPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('AllocationHistoryPage', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders allocation history table', () => {
    const allocationHistory = [
      { date: '2021-01-01', employeeOrProject: 'John Doe', allocation: 80 },
      { date: '2021-01-02', employeeOrProject: 'Jane Smith', allocation: 60 },
    ];
    useSelector.mockReturnValue(allocationHistory);

    const { getByText } = render(<AllocationHistoryPage />);

    expect(getByText('Allocation History')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Employee/Project')).toBeInTheDocument();
    expect(getByText('Allocation')).toBeInTheDocument();

    allocationHistory.forEach((allocation) => {
      expect(getByText(allocation.date)).toBeInTheDocument();
      expect(getByText(allocation.employeeOrProject)).toBeInTheDocument();
      expect(getByText(allocation.allocation.toString())).toBeInTheDocument();
    });
  });
});
