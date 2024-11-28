import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Modal,
} from "react-bootstrap";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useNavigate } from "react-router-dom";
// import { filteredEmployees } from "../../store/reducers/counterSlice";
import { GrClose } from "react-icons/gr";

const EmployeeList = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [addEmployeeForm, setAddEmployeeForm] = useState(false);
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  const employees = useSelector((state) => state?.add?.employee);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = employees.filter(employee =>
      employee.name.toLowerCase().includes(name.trim().toLowerCase())
    );
    setFilteredEmployee(filtered);
  };

  const handleClearFilter = () => {
    setName("");
    setFilteredEmployee([]);
  };

  const openAddEmployeeForm = () => {
    setAddEmployeeForm(true);
  };

  const handleEmployeFormClose = () => {
    setAddEmployeeForm(false);
  };

  const handleClick = (data) => {
    history('allocateProject', {
      state: data
    });
  };

  const style={
    maxWidth:"60%",
    margin:"auto"
   }
    

  return (
    <Container style={style}>
      <Row className="align-items-left mt-5 mb-3">
        <Row>
          <h2 className="ml-4">Employee List</h2>
        </Row>
      </Row>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Search Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Button
                variant="primary"
                onClick={handleFilter}
                className="mb-2 mr-3"
              >
                Filter
              </Button>
              <Button
                variant="secondary"
                onClick={handleClearFilter}
                className="mb-2"
                style={{ display: name ? "inline-block" : "none" }}
              >
                Clear Filter
              </Button>
              <Col className="d-flex justify-content-end mb-2">
                <Button variant="primary" onClick={openAddEmployeeForm}>
                  Add Employee
                </Button>
              </Col>
              <Modal show={addEmployeeForm} onHide={handleEmployeFormClose}>
                <Modal.Header >
                  <Modal.Title>Add Employee</Modal.Title>
                  <span className='bg-secondary px-1 mt-1 '>
          <GrClose onClick={handleEmployeFormClose}/></span>
                </Modal.Header>
                <Modal.Body>
                  <EmployeeForm />
                </Modal.Body>
              </Modal>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Business Unit</th>
                <th>Project Allocated</th>
                <th>Allocation Percentage</th>
              </tr>
            </thead>
            <tbody>
              {(filteredEmployee.length > 0 ? filteredEmployee : employees).map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.businessUnit}</td>
                  <td>
                    {!employee.project ? (
                      <Button
                        variant="primary"
                        type="button"
                        onClick={() => handleClick(employee)}
                      >
                        Allocate Project
                      </Button>
                    ) : (
                      employee.project
                    )}
                  </td>
                  <td>{employee.allocationPercentage}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeList;
