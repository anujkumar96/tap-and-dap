
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Button } from 'react-bootstrap';
import { selectClient, selectProject } from './actions';

const ClientProjectSelectionPage = () => {
  const clients = useSelector(state => state.clients);
  const projects = useSelector(state => state.projects);
  const selectedClient = useSelector(state => state.selectedClient);
  const selectedProject = useSelector(state => state.selectedProject);
  const dispatch = useDispatch();

  const handleClientChange = (event) => {
    dispatch(selectClient(event.target.value));
  };

  const handleProjectChange = (event) => {
    dispatch(selectProject(event.target.value));
  };

  return (
    <div>
      <h1>Client/Project Selection Page</h1>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="client-dropdown">
          {selectedClient ? selectedClient.name : 'Select Client'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {clients.map(client => (
            <Dropdown.Item key={client.id} value={client.id} onClick={handleClientChange}>
              {client.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
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
      <Button variant="primary" disabled={!selectedClient || !selectedProject}>
        Continue
      </Button>
    </div>
  );
};

export default ClientProjectSelectionPage;
