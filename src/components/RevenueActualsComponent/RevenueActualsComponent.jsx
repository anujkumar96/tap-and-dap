
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchRevenueActuals } from '../actions/revenueActions';

const RevenueActualsComponent = () => {
  const revenueActuals = useSelector(state => state.revenue.actuals);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRevenueActuals());
  }, [dispatch]);

  return (
    <div className="revenue-actuals">
      <h2>Revenue Actuals</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {revenueActuals.map(actual => (
            <tr key={actual.id}>
              <td>{actual.date}</td>
              <td>{actual.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RevenueActualsComponent;
