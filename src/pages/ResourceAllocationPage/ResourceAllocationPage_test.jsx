
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResourceAllocationPage from './ResourceAllocationPage';

const mockStore = configureStore([]);

describe('ResourceAllocationPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      employees: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
      ],
      projects: [
        { id: 1, name: 'Project A' },
        { id: 2, name: 'Project B' },
      ],
    });

    component = render(
      <Provider store={store}>
        <ResourceAllocationPage />
      </Provider>
    );
  });

  it('should render Resource Allocation Page', () => {
    const { getByText } = component;
    const pageTitle = getByText('Resource Allocation Page');
    expect(pageTitle).toBeInTheDocument();
  });

  it('should render employee select options', () => {
    const { getByLabelText } = component;
    const employeeSelect = getByLabelText('Select Employee');
    expect(employeeSelect).toBeInTheDocument();
    expect(employeeSelect.children.length).toBe(3); // 2 employees + default option
  });

  it('should render project select options', () => {
    const { getByLabelText } = component;
    const projectSelect = getByLabelText('Select Project');
    expect(projectSelect).toBeInTheDocument();
    expect(projectSelect.children.length).toBe(3); // 2 projects + default option
  });

  it('should render allocated hours input', () => {
    const { getByLabelText } = component;
    const allocatedHoursInput = getByLabelText('Allocated Hours');
    expect(allocatedHoursInput).toBeInTheDocument();
  });

  it('should dispatch assignEmployeeToProject action on assign button click', () => {
    const { getByText, getByLabelText } = component;
    const assignButton = getByText('Assign');
    const employeeSelect = getByLabelText('Select Employee');
    const projectSelect = getByLabelText('Select Project');
    const allocatedHoursInput = getByLabelText('Allocated Hours');

    fireEvent.change(employeeSelect, { target: { value: '1' } });
    fireEvent.change(projectSelect, { target: { value: '1' } });
    fireEvent.change(allocatedHoursInput, { target: { value: '10' } });
    fireEvent.click(assignButton);

    const actions = store.getActions();
    expect(actions[0]).toEqual(assignEmployeeToProject('1', '1', '10'));
  });
});
