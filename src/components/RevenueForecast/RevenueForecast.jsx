import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { incrementForecast, decrementForecast } from './actions';

const RevenueForecast = () => {
  const forecast = useSelector(state => state.forecast);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementForecast());
  };

  const handleDecrement = () => {
    dispatch(decrementForecast());
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Revenue Forecast</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{forecast}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleIncrement}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RevenueForecast;
