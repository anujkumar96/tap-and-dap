
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import AllocationForm from './AllocationForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('AllocationForm', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  test('should render form fields', () => {
    const { getByLabelText } = render(<AllocationForm />);

    expect(getByLabelText('Project')).toBeInTheDocument();
    expect(getByLabelText('Employee')).toBeInTheDocument();
    expect(getByLabelText('Start Date')).toBeInTheDocument();
    expect(getByLabelText('End Date')).toBeInTheDocument();
    expect(getByLabelText('Role')).toBeInTheDocument();
    expect(getByLabelText('Allocation (%)')).toBeInTheDocument();
  });

  test('should update state when form fields are changed', () => {
    const { getByLabelText } = render(<AllocationForm />);

    fireEvent.change(getByLabelText('Project'), { target: { value: 'Project 1' } });
    fireEvent.change(getByLabelText('Employee'), { target: { value: 'Employee 1' } });
    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('End Date'), { target: { value: '2022-01-31' } });
    fireEvent.change(getByLabelText('Role'), { target: { value: 'Role 1' } });
    fireEvent.change(getByLabelText('Allocation (%)'), { target: { value: '50' } });

    expect(getByLabelText('Project').value).toBe('Project 1');
    expect(getByLabelText('Employee').value).toBe('Employee 1');
    expect(getByLabelText('Start Date').value).toBe('2022-01-01');
    expect(getByLabelText('End Date').value).toBe('2022-01-31');
    expect(getByLabelText('Role').value).toBe('Role 1');
    expect(getByLabelText('Allocation (%)').value).toBe('50');
  });

  test('should dispatch allocateEmployee action when form is submitted', () => {
    const { getByLabelText, getByText } = render(<AllocationForm />);

    fireEvent.change(getByLabelText('Project'), { target: { value: 'Project 1' } });
    fireEvent.change(getByLabelText('Employee'), { target: { value: 'Employee 1' } });
    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('End Date'), { target: { value: '2022-01-31' } });
    fireEvent.change(getByLabelText('Role'), { target: { value: 'Role 1' } });
    fireEvent.change(getByLabelText('Allocation (%)'), { target: { value: '50' } });

    fireEvent.click(getByText('Allocate'));

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'ALLOCATE_EMPLOYEE',
      payload: {
        project: 'Project 1',
        employee: 'Employee 1',
        startDate: '2022-01-01',
        endDate: '2022-01-31',
        role: 'Role 1',
        allocation: '50',
      },
    });
  });

  test('should reset form fields after form is submitted', () => {
    const { getByLabelText, getByText } = render(<AllocationForm />);

    fireEvent.change(getByLabelText('Project'), { target: { value: 'Project 1' } });
    fireEvent.change(getByLabelText('Employee'), { target: { value: 'Employee 1' } });
    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('End Date'), { target: { value: '2022-01-31' } });
    fireEvent.change(getByLabelText('Role'), { target: { value: 'Role 1' } });
    fireEvent.change(getByLabelText('Allocation (%)'), { target: { value: '50' } });

    fireEvent.click(getByText('Allocate'));

    expect(getByLabelText('Project').value).toBe('');
    expect(getByLabelText('Employee').value).toBe('');
    expect(getByLabelText('Start Date').value).toBe('');
    expect(getByLabelText('End Date').value).toBe('');
    expect(getByLabelText('Role').value).toBe('');
    expect(getByLabelText('Allocation (%)').value).toBe('');
  });
});
