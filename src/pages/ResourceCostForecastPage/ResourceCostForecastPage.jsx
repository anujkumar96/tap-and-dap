
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Dropdown } from 'react-bootstrap';
import { fetchResourceCostForecast } from '../actions/resourceActions';

const ResourceCostForecastPage = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  const clients = useSelector(state => state.clients);
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchResourceCostForecast(selectedClient, selectedProject));
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="clientDropdown">
          <Form.Label>Client</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="clientDropdownToggle">
              {selectedClient ? selectedClient : 'Select Client'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {clients.map(client => (
                <Dropdown.Item key={client.id} onSelect={() => handleClientChange(client.name)}>
                  {client.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group controlId="projectDropdown">
          <Form.Label>Project</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="projectDropdownToggle">
              {selectedProject ? selectedProject : 'Select Project'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {projects.map(project => (
                <Dropdown.Item key={project.id} onSelect={() => handleProjectChange(project.name)}>
                  {project.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </Form>
    </div>
  );
};

export default ResourceCostForecastPage;
