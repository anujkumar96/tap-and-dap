
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const EmployeeListPage = () => {
  const employees = useSelector(state => state?.add?.employee);
  
  return (
    <div>
      <h1>Employee List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeListPage;
