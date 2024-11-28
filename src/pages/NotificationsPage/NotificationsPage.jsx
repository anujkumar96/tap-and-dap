
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const NotificationsPage = () => {
  const notifications = useSelector(state => state.notifications);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Notifications Page</h1>
          <ListGroup>
            {notifications.map(notification => (
              <ListGroup.Item key={notification.id}>
                {notification.message}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default NotificationsPage;
