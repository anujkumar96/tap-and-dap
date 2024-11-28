
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ResourceManagementPage = () => {
  const resources = useSelector(state => state.resources);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Resource Management Page</h1>
        </Col>
      </Row>
      <Row>
        {resources.map(resource => (
          <Col key={resource.id} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{resource.name}</Card.Title>
                <Card.Text>{resource.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResourceManagementPage;
