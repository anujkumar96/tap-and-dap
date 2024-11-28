
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Button } from 'react-bootstrap';
import { selectProject, selectBU } from '../actions';

const ProjectBUSelectionPage = () => {
  const projects = useSelector(state => state.projects);
  const selectedProject = useSelector(state => state.selectedProject);
  const selectedBU = useSelector(state => state.selectedBU);
  const dispatch = useDispatch();

  const handleProjectChange = (event) => {
    dispatch(selectProject(event.target.value));
  };

  const handleBUChange = (event) => {
    dispatch(selectBU(event.target.value));
  };

  return (
    <div>
      <h1>Project/BU Selection Page</h1>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="project-dropdown">
          {selectedProject ? selectedProject.name : 'Select Project'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {projects.map(project => (
            <Dropdown.Item key={project.id} value={project.id} onClick={handleProjectChange}>
              {project.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="bu-dropdown">
          {selectedBU ? selectedBU.name : 'Select BU'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {selectedProject && selectedProject.bus.map(bu => (
            <Dropdown.Item key={bu.id} value={bu.id} onClick={handleBUChange}>
              {bu.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="primary" disabled={!selectedBU}>Continue</Button>
    </div>
  );
};

export default ProjectBUSelectionPage;
