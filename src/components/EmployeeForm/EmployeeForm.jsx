
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { addEmployee, editEmployee } from '../actions/employeeActions';
import { addEmployee } from '../../store/reducers/counterSlice';

const EmployeeForm = ({ employee, isEditing }) => {
  const [name, setName] = useState(employee ? employee.name : '');
  const [designation, setDesignation] = useState(employee ? employee.designation : '');
  const [supervisor, setSupervisor] = useState(employee ? employee.supervisor : '');
  const [businessUnit, setBusinessUnit] = useState(employee ? employee.businessUnit : '');
  const [project, setProject] = useState(employee ? employee.project : '');
  const [allocationPercentage, setAllocationPercentage] = useState(employee ? employee.allocationPercentage : '');

  const dispatch = useDispatch();
  const emp = useSelector((state)=>state.add.employee)
  const lastObject = emp[emp?.length - 1];
  const lastId = lastObject?.id;
  let [id, setId]=useState(lastId === undefined ? 1 : lastId+1);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id,
      name,
      designation,
      supervisor,
      businessUnit,
      project,
      allocationPercentage
    };

    if (isEditing) {
      // dispatch(editEmployee(employee.id, newEmployee));
    } else {
      dispatch(addEmployee(newEmployee));
      setId(id+1)
    }

    // Reset form fields
    setName('');
    setDesignation('');
    setSupervisor('');
    setBusinessUnit('');
    setProject('');
    setAllocationPercentage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="designation">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="supervisor">
        <Form.Label>Supervisor</Form.Label>
        <Form.Control type="text" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="businessUnit">
        <Form.Label>Business Unit</Form.Label>
        <Form.Control type="text" value={businessUnit} onChange={(e) => setBusinessUnit(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="project">
        <Form.Label>Project</Form.Label>
        <Form.Control type="text" value={project} onChange={(e) => setProject(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="allocationPercentage">
        <Form.Label>Allocation Percentage</Form.Label>
        <Form.Control type="number" value={allocationPercentage} onChange={(e) => setAllocationPercentage(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit" className='mt-3 pl-2 pr-2'>
        {isEditing ? 'Update' : 'Add'}
      </Button>
    </Form>
  );
};

export default EmployeeForm;
