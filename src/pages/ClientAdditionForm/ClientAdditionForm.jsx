
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addClient } from '../../store/reducers/counterSlice';
import { useDispatch, useSelector } from 'react-redux';


const ClientAdditionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const clients=useSelector(state=>state?.add?.client)
  const dispatch = useDispatch();
  const lastObject = clients[clients?.length - 1];
  const lastId = lastObject?.id;
  let [id, setId]=useState(lastId === undefined ? 1 : lastId+1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email && phone){
      dispatch(addClient({id,name,email, phone }));
    }
    setId(id+1) 
    setName('');
    setEmail('');
    setPhone('');
  };


  return (
    <Form onSubmit={handleSubmit} stripped>
      <Form.Group controlId="name" stripped>
        <Form.Label>Name</Form.Label >
        <Form.Control stripped
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email" stripped>
        <Form.Label>Email</Form.Label >
        <Form.Control stripped
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-3'>
        Add Client
      </Button>
    </Form>
  );
};

export default ClientAdditionForm;
