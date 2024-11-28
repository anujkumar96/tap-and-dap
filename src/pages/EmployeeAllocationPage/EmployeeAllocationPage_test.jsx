
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import EmployeeAllocationPage from './EmployeeAllocationPage';
import { allocateEmployee } from '../actions/employeeActions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('../actions/employeeActions', () => ({
  allocateEmployee: jest.fn()
}));

describe('EmployeeAllocationPage', () => {
  const employees = [
    { id: 1, name: 'John Doe', project: 'Project A' },
    { id: 2, name: 'Jane Smith', project: 'Project B' }
  ];

  const projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' }
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      employees,
      projects
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    allocateEmployee.mockClear();
  });

  test('renders employee allocation page', () => {
    const { getByText, getByLabelText } = render(<EmployeeAllocationPage />);
    
    expect(getByText('Employee Allocation Page')).toBeInTheDocument();
    expect(getByLabelText('Select Employee:')).toBeInTheDocument();
    expect(getByLabelText('Select Project:')).toBeInTheDocument();
    expect(getByText('Allocate')).toBeInTheDocument();
  });

  test('handles employee selection', () => {
    const { getByLabelText } = render(<EmployeeAllocationPage />);
    const employeeSelect = getByLabelText('Select Employee:');

    fireEvent.change(employeeSelect, { target: { value: '1' } });

    expect(employeeSelect.value).toBe('1');
  });

  test('handles project selection', () => {
    const { getByLabelText } = render(<EmployeeAllocationPage />);
    const projectSelect = getByLabelText('Select Project:');

    fireEvent.change(projectSelect, { target: { value: '2' } });

    expect(projectSelect.value).toBe('2');
  });

  test('handles allocation button click', () => {
    const { getByText } = render(<EmployeeAllocationPage />);
    const allocateButton = getByText('Allocate');

    fireEvent.click(allocateButton);

    expect(allocateEmployee).toHaveBeenCalledTimes(1);
    expect(allocateEmployee).toHaveBeenCalledWith('', '');
  });
});
