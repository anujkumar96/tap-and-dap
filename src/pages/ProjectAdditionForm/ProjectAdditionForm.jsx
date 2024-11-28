
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../../store/reducers/counterSlice';

const ProjectAdditionForm = () => {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const dispatch = useDispatch();
  const projects = useSelector((state) => state?.add?.project);
  const lastObject = projects[projects?.length - 1];
  const lastId = lastObject?.id;
  let [id, setId]=useState(lastId === undefined ? 1 : lastId+1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && client){
      dispatch(addProject({id,name, client }));
    }
    setId(id+1)
    setName('');
    setClient('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="client">
        <Form.Label>Client</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter client name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className='mt-3'>
        Add Project
      </Button>
    </Form>
  );
};

export default ProjectAdditionForm;
