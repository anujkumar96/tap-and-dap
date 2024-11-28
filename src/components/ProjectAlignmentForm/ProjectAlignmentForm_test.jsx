
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ProjectAlignmentForm from './ProjectAlignmentForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('ProjectAlignmentForm', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render ProjectAlignmentForm component', () => {
    const { getByLabelText, getByText } = render(<ProjectAlignmentForm />);
    const projectIdInput = getByLabelText('Project ID');
    const employeeIdsSelect = getByLabelText('Employee IDs');
    const alignEmployeesButton = getByText('Align Employees');

    expect(projectIdInput).toBeInTheDocument();
    expect(employeeIdsSelect).toBeInTheDocument();
    expect(alignEmployeesButton).toBeInTheDocument();
  });

  test('should update projectId state on input change', () => {
    const { getByLabelText } = render(<ProjectAlignmentForm />);
    const projectIdInput = getByLabelText('Project ID');

    fireEvent.change(projectIdInput, { target: { value: '123' } });

    expect(projectIdInput.value).toBe('123');
  });

  test('should update employeeIds state on select change', () => {
    const { getByLabelText } = render(<ProjectAlignmentForm />);
    const employeeIdsSelect = getByLabelText('Employee IDs');

    fireEvent.change(employeeIdsSelect, { target: { value: ['1', '2'] } });

    expect(employeeIdsSelect.value).toEqual(['1', '2']);
  });

  test('should dispatch alignEmployeesToProject action on form submit', () => {
    const { getByLabelText, getByText } = render(<ProjectAlignmentForm />);
    const projectIdInput = getByLabelText('Project ID');
    const employeeIdsSelect = getByLabelText('Employee IDs');
    const alignEmployeesButton = getByText('Align Employees');

    fireEvent.change(projectIdInput, { target: { value: '123' } });
    fireEvent.change(employeeIdsSelect, { target: { value: ['1', '2'] } });
    fireEvent.click(alignEmployeesButton);

    expect(dispatchMock).toHaveBeenCalledWith(alignEmployeesToProject('123', ['1', '2']));
  });
});
