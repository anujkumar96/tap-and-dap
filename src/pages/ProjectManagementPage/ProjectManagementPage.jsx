
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProjectManagementPage.scss';

const ProjectManagementPage = () => {
  const projects = useSelector(state => state.projects);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Project Management Page</h1>
        </Col>
      </Row>
      <Row>
        {projects.map(project => (
          <Col key={project.id} md={4}>
            <Card className="project-card">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectManagementPage;
