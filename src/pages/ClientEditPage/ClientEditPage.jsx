import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateClient } from '../../store/reducers/counterSlice';
import { useLocation} from 'react-router-dom';

const ClientEditPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const clientId = location.state;
  const client = useSelector((state) => state?.add?.client?.find((e)=>e?.id===clientId));
  const [name, setName] = useState(client?.name); 
  const [email, setEmail] = useState(client?.email);
  const [phone, setPhone] = useState(client?.phone);
const [isDisabled,setIsDisabled]=useState(false);

useEffect(()=>{
  setIsDisabled(name?.trim()==='' || email?.trim()==='' || phone?.trim()==='')
},[name,email,phone])


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
       e.preventDefault();
    dispatch(updateClient({ id: client?.id, name, email, phone })); // Use optional chaining for client ID
    setName('');
    setEmail('');
    setPhone('');
  };

  const clientDropdown=[];
 const clients = useSelector((state) => state?.add?.client);
 clients.map((data)=>{
 let client={
 label:data.name,
 value:data.name
 }
 clientDropdown.push(client)
 })

  return  (
    <div className="client-edit-page">
      <Form onSubmit={handleSubmit}>
      
        <Form.Group controlId="project">
  <Form.Label>Name</Form.Label>
  <Form.Select
    className="custom-select"
    aria-label="Select Client"
    value={name}
    onChange={(e) => setName(e.target.value)}
  >
    {clientDropdown.map(option => (
      <option key={option?.value} value={option?.value}>
        {option.label}
      </option>
    ))}
  </Form.Select>
</Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={phone} onChange={handlePhoneChange} />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit" disabled={isDisabled} closeButton>
          Save
        </Button>
      </Form>
    </div>
  ) ;
};

export default ClientEditPage;
