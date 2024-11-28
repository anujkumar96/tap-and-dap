import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ExpenseForecastDashboard.scss';

const ExpenseForecastDashboard = () => {
  const expenseForecastData = useSelector(state => state.expenseForecastData);

  return (
    <Container fluid className="expense-forecast-dashboard">
      <Row>
        <Col>
          <h1>Expense Forecast Dashboard</h1>
        </Col>
      </Row>
      <Row>
        {expenseForecastData.map((category, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>
                  {category.subcategories.map((subcategory, index) => (
                    <div key={index}>
                      <span>{subcategory.name}</span>
                      <span>{subcategory.amount}</span>
                    </div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExpenseForecastDashboard;
