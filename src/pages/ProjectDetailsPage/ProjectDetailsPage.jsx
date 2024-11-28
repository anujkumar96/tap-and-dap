
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProjectDetailsPage.scss';

const ProjectDetailsPage = () => {
  const project = useSelector(state => state.project);

  return (
    <Container className="project-details-page">
      <Row>
        <Col>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Project Details</Card.Title>
              <Card.Text>
                <strong>Start Date:</strong> {project.startDate}<br />
                <strong>End Date:</strong> {project.endDate}<br />
                <strong>Status:</strong> {project.status}<br />
                <strong>Owner:</strong> {project.owner}<br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetailsPage;
