import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ExpenseCostForecastDashboard.scss';

const ExpenseCostForecastDashboard = () => {
  const expenseCostForecast = useSelector(state => state.expenseCostForecast);

  return (
    <Container>
      <Row>
        {expenseCostForecast.map((forecast, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card className="expense-card">
              <Card.Body>
                <Card.Title>{forecast.category}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{forecast.subcategory}</Card.Subtitle>
                <Card.Text>
                  Forecasted Cost: {forecast.cost}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExpenseCostForecastDashboard;
