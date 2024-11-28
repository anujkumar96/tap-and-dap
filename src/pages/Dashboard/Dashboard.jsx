
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  const allocatedResources = useSelector(state => state.allocatedResources);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        {allocatedResources.map(resource => (
          <Col key={resource.id} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{resource.name}</Card.Title>
                <Card.Text>Project: {resource.project}</Card.Text>
                <Card.Text>Allocation: {resource.allocation}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
