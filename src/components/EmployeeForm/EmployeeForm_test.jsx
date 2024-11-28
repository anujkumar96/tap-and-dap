
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EmployeeForm from './EmployeeForm';
import { addEmployee, editEmployee } from '../actions/employeeActions';

const mockStore = configureStore([]);

describe('EmployeeForm', () => {
  let store;
  let component;
  const employee = {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    supervisor: 'Jane Smith',
    businessUnit: 'Engineering',
    project: 'Project X',
    allocationPercentage: 80
  };

  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <EmployeeForm employee={employee} isEditing={false} />
      </Provider>
    );
  });

  it('should render the form with correct initial values', () => {
    const { getByLabelText } = component;

    expect(getByLabelText('Name').value).toBe(employee.name);
    expect(getByLabelText('Designation').value).toBe(employee.designation);
    expect(getByLabelText('Supervisor').value).toBe(employee.supervisor);
    expect(getByLabelText('Business Unit').value).toBe(employee.businessUnit);
    expect(getByLabelText('Project').value).toBe(employee.project);
    expect(getByLabelText('Allocation Percentage').value).toBe(employee.allocationPercentage.toString());
  });

  it('should dispatch addEmployee action when submitting the form', () => {
    const { getByLabelText, getByText } = component;
    const nameInput = getByLabelText('Name');
    const designationInput = getByLabelText('Designation');
    const supervisorInput = getByLabelText('Supervisor');
    const businessUnitInput = getByLabelText('Business Unit');
    const projectInput = getByLabelText('Project');
    const allocationPercentageInput = getByLabelText('Allocation Percentage');
    const addButton = getByText('Add');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(designationInput, { target: { value: 'Software Engineer' } });
    fireEvent.change(supervisorInput, { target: { value: 'Jane Smith' } });
    fireEvent.change(businessUnitInput, { target: { value: 'Engineering' } });
    fireEvent.change(projectInput, { target: { value: 'Project X' } });
    fireEvent.change(allocationPercentageInput, { target: { value: '80' } });
    fireEvent.click(addButton);

    const expectedAction = addEmployee({
      name: 'John Doe',
      designation: 'Software Engineer',
      supervisor: 'Jane Smith',
      businessUnit: 'Engineering',
      project: 'Project X',
      allocationPercentage: '80'
    });
    expect(store.getActions()).toContainEqual(expectedAction);
  });

  it('should dispatch editEmployee action when submitting the form in edit mode', () => {
    const { getByLabelText, getByText } = component;
    const nameInput = getByLabelText('Name');
    const designationInput = getByLabelText('Designation');
    const supervisorInput = getByLabelText('Supervisor');
    const businessUnitInput = getByLabelText('Business Unit');
    const projectInput = getByLabelText('Project');
    const allocationPercentageInput = getByLabelText('Allocation Percentage');
    const updateButton = getByText('Update');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(designationInput, { target: { value: 'Software Engineer' } });
    fireEvent.change(supervisorInput, { target: { value: 'Jane Smith' } });
    fireEvent.change(businessUnitInput, { target: { value: 'Engineering' } });
    fireEvent.change(projectInput, { target: { value: 'Project X' } });
    fireEvent.change(allocationPercentageInput, { target: { value: '80' } });
    fireEvent.click(updateButton);

    const expectedAction = editEmployee(1, {
      name: 'John Doe',
      designation: 'Software Engineer',
      supervisor: 'Jane Smith',
      businessUnit: 'Engineering',
      project: 'Project X',
      allocationPercentage: '80'
    });
    expect(store.getActions()).toContainEqual(expectedAction);
  });
});
