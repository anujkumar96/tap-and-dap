
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { filterCombinations } from './actions';

const ResourceCostForecastDashboard = () => {
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');

  const combinations = useSelector(state => state.combinations);
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterCombinations(client, project));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Resource Cost Forecast Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="client">
              <Form.Label>Client</Form.Label>
              <Form.Control
                type="text"
                value={client}
                onChange={e => setClient(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="project">
              <Form.Label>Project</Form.Label>
              <Form.Control
                type="text"
                value={project}
                onChange={e => setProject(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleFilter}>
              Filter
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Filtered Combinations</h2>
          <ul>
            {combinations.map(combination => (
              <li key={combination.id}>
                {combination.client} - {combination.project}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ResourceCostForecastDashboard;
