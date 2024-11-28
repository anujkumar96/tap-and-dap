import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import AddEmployeePage from './AddEmployeePage';
import { addEmployee } from '../actions/employeeActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../actions/employeeActions', () => ({
  addEmployee: jest.fn(),
}));

describe('AddEmployeePage', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render AddEmployeePage component', () => {
    const { getByText, getByLabelText } = render(<AddEmployeePage />);

    expect(getByText('Add Employee')).toBeInTheDocument();
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Age')).toBeInTheDocument();
    expect(getByLabelText('Position')).toBeInTheDocument();
    expect(getByText('Add Employee')).toBeInTheDocument();
  });

  test('should dispatch addEmployee action on form submission', () => {
    const { getByLabelText, getByText } = render(<AddEmployeePage />);

    const nameInput = getByLabelText('Name');
    const ageInput = getByLabelText('Age');
    const positionInput = getByLabelText('Position');
    const addButton = getByText('Add Employee');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.change(positionInput, { target: { value: 'Manager' } });
    fireEvent.click(addButton);

    expect(dispatchMock).toHaveBeenCalledWith(addEmployee({
      name: 'John Doe',
      age: '30',
      position: 'Manager',
    }));
  });

  test('should clear input fields after form submission', () => {
    const { getByLabelText, getByText } = render(<AddEmployeePage />);

    const nameInput = getByLabelText('Name');
    const ageInput = getByLabelText('Age');
    const positionInput = getByLabelText('Position');
    const addButton = getByText('Add Employee');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.change(positionInput, { target: { value: 'Manager' } });
    fireEvent.click(addButton);

    expect(nameInput.value).toBe('');
    expect(ageInput.value).toBe('');
    expect(positionInput.value).toBe('');
  });
});