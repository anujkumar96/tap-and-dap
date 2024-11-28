
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CollectionForecastComponent = () => {
  const forecastData = useSelector(state => state.forecastData);

  return (
    <Card>
      <Card.Header>Collection Forecast</Card.Header>
      <Card.Body>
        <ListGroup>
          {forecastData.map((data, index) => (
            <ListGroup.Item key={index}>
              <div>{data.date}</div>
              <div>{data.temperature}</div>
              <div>{data.weather}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CollectionForecastComponent;
