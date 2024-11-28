
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectClient, selectProject } from './actions';

const ClientProjectDropdown = () => {
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
    </div>
  );
};

export default ClientProjectDropdown;
