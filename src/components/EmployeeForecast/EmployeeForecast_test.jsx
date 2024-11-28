
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import EmployeeForecast from './EmployeeForecast';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('EmployeeForecast', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ employeeData: [] }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render the component', () => {
    const { getByText } = render(<EmployeeForecast />);
    const headingElement = getByText('Employee Forecast');
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the table with correct headers', () => {
    const { getByText } = render(<EmployeeForecast />);
    const nameHeader = getByText('Name');
    const designationHeader = getByText('Designation');
    const supervisorHeader = getByText('Supervisor');
    const buHeader = getByText('BU');
    const projectHeader = getByText('Project');
    const allocationHeader = getByText('% Allocation');
    const monthlyCostHeader = getByText('Monthly Cost');
    const notesHeader = getByText('Notes');

    expect(nameHeader).toBeInTheDocument();
    expect(designationHeader).toBeInTheDocument();
    expect(supervisorHeader).toBeInTheDocument();
    expect(buHeader).toBeInTheDocument();
    expect(projectHeader).toBeInTheDocument();
    expect(allocationHeader).toBeInTheDocument();
    expect(monthlyCostHeader).toBeInTheDocument();
    expect(notesHeader).toBeInTheDocument();
  });

  it('should render the table with employee data', () => {
    const employeeData = [
      {
        id: 1,
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 80,
        monthlyCost: 5000,
        notes: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        name: 'Jane Smith',
        designation: 'Senior Software Engineer',
        supervisor: 'Mark Johnson',
        bu: 'IT',
        project: 'Project B',
        allocation: 100,
        monthlyCost: 7000,
        notes: 'Lorem ipsum dolor sit amet',
      },
    ];

    useSelector.mockImplementation(callback => callback({ employeeData }));

    const { getByText } = render(<EmployeeForecast />);
    const johnDoeName = getByText('John Doe');
    const janeSmithName = getByText('Jane Smith');
    const johnDoeDesignation = getByText('Software Engineer');
    const janeSmithDesignation = getByText('Senior Software Engineer');
    const johnDoeSupervisor = getByText('Jane Smith');
    const janeSmithSupervisor = getByText('Mark Johnson');
    const johnDoeBu = getByText('IT');
    const janeSmithBu = getByText('IT');
    const johnDoeProject = getByText('Project A');
    const janeSmithProject = getByText('Project B');
    const johnDoeAllocation = getByText('80');
    const janeSmithAllocation = getByText('100');
    const johnDoeMonthlyCost = getByText('5000');
    const janeSmithMonthlyCost = getByText('7000');
    const johnDoeNotes = getByText('Lorem ipsum dolor sit amet');
    const janeSmithNotes = getByText('Lorem ipsum dolor sit amet');

    expect(johnDoeName).toBeInTheDocument();
    expect(janeSmithName).toBeInTheDocument();
    expect(johnDoeDesignation).toBeInTheDocument();
    expect(janeSmithDesignation).toBeInTheDocument();
    expect(johnDoeSupervisor).toBeInTheDocument();
    expect(janeSmithSupervisor).toBeInTheDocument();
    expect(johnDoeBu).toBeInTheDocument();
    expect(janeSmithBu).toBeInTheDocument();
    expect(johnDoeProject).toBeInTheDocument();
    expect(janeSmithProject).toBeInTheDocument();
    expect(johnDoeAllocation).toBeInTheDocument();
    expect(janeSmithAllocation).toBeInTheDocument();
    expect(johnDoeMonthlyCost).toBeInTheDocument();
    expect(janeSmithMonthlyCost).toBeInTheDocument();
    expect(johnDoeNotes).toBeInTheDocument();
    expect(janeSmithNotes).toBeInTheDocument();
  });
});
