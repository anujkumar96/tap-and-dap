
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import './ForecastExpenseCostDashboard.scss';

const ForecastExpenseCostDashboard = () => {
  const forecastedExpenses = useSelector(state => state.forecastedExpenses);

  return (
    <div className="forecast-expense-cost-dashboard">
      <h2>Forecast Expense Cost Dashboard</h2>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Total Forecasted Expenses</Card.Title>
              <Card.Text>{forecastedExpenses.total}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Category-wise Forecasted Expenses</Card.Title>
              <ul>
                {forecastedExpenses.categories.map(category => (
                  <li key={category.id}>
                    {category.name}: {category.amount}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ForecastExpenseCostDashboard;
