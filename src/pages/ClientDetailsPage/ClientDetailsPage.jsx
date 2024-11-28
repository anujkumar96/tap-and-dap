
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ClientDetailsPage.scss';

const ClientDetailsPage = () => {
  const client = useSelector(state => state.client);

  return (
    <Container className="client-details-page">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Client Details</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {client.name}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {client.email}
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> {client.phone}
              </Card.Text>
              <Card.Text>
                <strong>Address:</strong> {client.address}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientDetailsPage;
