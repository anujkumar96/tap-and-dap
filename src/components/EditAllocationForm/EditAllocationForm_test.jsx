
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import EditAllocationForm from './EditAllocationForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('EditAllocationForm', () => {
  const allocation = {
    id: 1,
    startDate: '2021-01-01',
    endDate: '2021-01-31',
    role: 'Developer',
    allocationPercentage: 80,
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  test('renders form fields with correct values', () => {
    const { getByLabelText } = render(<EditAllocationForm allocation={allocation} />);

    expect(getByLabelText('Start Date')).toHaveValue('2021-01-01');
    expect(getByLabelText('End Date')).toHaveValue('2021-01-31');
    expect(getByLabelText('Role')).toHaveValue('Developer');
    expect(getByLabelText('Allocation Percentage')).toHaveValue('80');
  });

  test('dispatches editAllocation action on form submission', () => {
    const dispatch = useDispatch();
    const { getByLabelText, getByRole } = render(<EditAllocationForm allocation={allocation} />);

    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2021-02-01' } });
    fireEvent.change(getByLabelText('End Date'), { target: { value: '2021-02-28' } });
    fireEvent.change(getByLabelText('Role'), { target: { value: 'Tester' } });
    fireEvent.change(getByLabelText('Allocation Percentage'), { target: { value: '60' } });
    fireEvent.click(getByRole('button', { name: 'Save' }));

    expect(dispatch).toHaveBeenCalledWith({
      type: 'EDIT_ALLOCATION',
      payload: {
        id: 1,
        startDate: '2021-02-01',
        endDate: '2021-02-28',
        role: 'Tester',
        allocationPercentage: '60',
      },
    });
  });
});
