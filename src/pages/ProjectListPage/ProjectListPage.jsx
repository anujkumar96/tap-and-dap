
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { selectProject } from '../actions/projectActions';

const ProjectListPage = () => {
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

  const handleProjectSelect = (projectId) => {
    dispatch(selectProject(projectId));
  };

  return (
    <div className="project-list-page">
      <h1>Project List</h1>
      {projects.map(project => (
        <Card key={project.id} className="project-card">
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button onClick={() => handleProjectSelect(project.id)}>Allocate Resources</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProjectListPage;
