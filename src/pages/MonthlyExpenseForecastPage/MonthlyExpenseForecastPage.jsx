
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const MonthlyExpenseForecastPage = () => {
  const monthlyExpenseForecast = useSelector(state => state.monthlyExpenseForecast);

  return (
    <div>
      <h1>Monthly Expense Forecast</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Month</th>
            <th>Expense</th>
          </tr>
        </thead>
        <tbody>
          {monthlyExpenseForecast.map((expense, index) => (
            <tr key={index}>
              <td>{expense.month}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MonthlyExpenseForecastPage;
