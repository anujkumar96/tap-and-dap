import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { fetchRevenueForecast } from '../actions/revenueActions';

const RevenueForecastPage = () => {
  const revenueForecast = useSelector(state => state.revenue.forecast);
  const dispatch = useDispatch();

  const handleFetchForecast = () => {
    dispatch(fetchRevenueForecast());
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Revenue Forecast</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleFetchForecast}>Fetch Forecast</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {revenueForecast && (
            <div>
              <h2>Forecast:</h2>
              <p>{revenueForecast}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RevenueForecastPage;
