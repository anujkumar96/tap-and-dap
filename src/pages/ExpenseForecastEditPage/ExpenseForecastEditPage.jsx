import React, { useState } from 'react';
import { Form, Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateExpenseForecast } from '../actions/expenseActions';

const ExpenseForecastEditPage = () => {
  const [expenseData, setExpenseData] = useState([]);
  const dispatch = useDispatch();
  const expenseForecast = useSelector(state => state.expenseForecast);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExpenseData = [...expenseData];
    updatedExpenseData[index][name] = value;
    setExpenseData(updatedExpenseData);
  };

  const handleSave = () => {
    dispatch(updateExpenseForecast(expenseData));
  };

  return (
    <div>
      <Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              {/* ... */}
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>
            {expenseForecast.map((expense, index) => (
              <tr key={index}>
                <td>{expense.category}</td>
                <td>{expense.subcategory}</td>
                <td>
                  <Form.Control
                    type="number"
                    name="jan"
                    value={expenseData[index]?.jan || expense.jan}
                    onChange={e => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    name="feb"
                    value={expenseData[index]?.feb || expense.feb}
                    onChange={e => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    name="mar"
                    value={expenseData[index]?.mar || expense.mar}
                    onChange={e => handleInputChange(e, index)}
                  />
                </td>
                {/* ... */}
                <td>
                  <Form.Control
                    type="number"
                    name="dec"
                    value={expenseData[index]?.dec || expense.dec}
                    onChange={e => handleInputChange(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default ExpenseForecastEditPage;
