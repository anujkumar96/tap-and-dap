
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ResourceCostForecastDashboard = () => {
  const forecastedCosts = useSelector(state => state.forecastedCosts);

  return (
    <Card>
      <Card.Header>Resource Cost Forecast Dashboard</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <h5>Total Forecasted Cost:</h5>
            <p>{forecastedCosts.totalCost}</p>
          </Col>
          <Col>
            <h5>Cost Breakdown:</h5>
            <ul>
              {forecastedCosts.breakdown.map(item => (
                <li key={item.id}>
                  {item.name}: {item.cost}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ResourceCostForecastDashboard;
