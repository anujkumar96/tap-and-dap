
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const EmployeeForecast = () => {
  const employeeData = useSelector(state => state.employeeData);

  return (
    <div>
      <h2>Employee Forecast</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Supervisor</th>
            <th>BU</th>
            <th>Project</th>
            <th>% Allocation</th>
            <th>Monthly Cost</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.supervisor}</td>
              <td>{employee.bu}</td>
              <td>{employee.project}</td>
              <td>{employee.allocation}</td>
              <td>{employee.monthlyCost}</td>
              <td>{employee.notes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeForecast;
