
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const ExpenseCostRollup = () => {
  const expenseData = useSelector(state => state.expenseData);

  return (
    <div>
      <h2>Expense Cost Rollup</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {expenseData.map((expense, index) => (
            <tr key={index}>
              <td>{expense.month}</td>
              <td>{expense.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseCostRollup;
