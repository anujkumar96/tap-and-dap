
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { editForecast } from '../actions/expenseActions';

const ExpenseCostForecastList = () => {
  const expenseCostForecast = useSelector(state => state.expenseCostForecast);
  const dispatch = useDispatch();

  const handleEdit = (category, subcategory, month) => {
    // Logic to handle edit forecast
    dispatch(editForecast(category, subcategory, month));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Month</th>
            <th>Forecasted Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenseCostForecast.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.subcategory}</td>
              <td>{item.month}</td>
              <td>{item.forecastedCost}</td>
              <td>
                <Button onClick={() => handleEdit(item.category, item.subcategory, item.month)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseCostForecastList;
