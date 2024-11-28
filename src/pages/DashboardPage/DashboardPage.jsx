// React UI component code in JSX

import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DashboardPage = () => {
  const forecastedCosts = useSelector(state => state.forecastedCosts);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h5>Forecasted Resource Cost</h5>
              <BarChart width={500} height={300} data={forecastedCosts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="clientProject" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cost" fill="#8884d8" />
              </BarChart>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;


// SCSS code for styling

@import '~bootstrap/scss/bootstrap';

.container {
  margin-top: 20px;
}

h1 {
  margin-bottom: 20px;
}

.card {
  margin-bottom: 20px;
}

.card-body {
  padding: 20px;
}

h5 {
  margin-bottom: 10px;
}