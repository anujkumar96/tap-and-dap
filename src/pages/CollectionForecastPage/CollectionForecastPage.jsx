
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CollectionForecastPage = () => {
  const forecastData = useSelector(state => state.forecastData);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Collection Forecast Page</h1>
        </Col>
      </Row>
      <Row>
        {forecastData.map((data, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{data.date}</Card.Title>
                <Card.Text>{data.weather}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CollectionForecastPage;
