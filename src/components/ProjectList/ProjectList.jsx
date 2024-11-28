import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Button, Container, Row, Col, Form, Table, Modal } from "react-bootstrap";
import { deleteProject } from "../../store/reducers/counterSlice";
import ProjectAdditionForm from "../../pages/ProjectAdditionForm/ProjectAdditionForm";
import { MdDeleteForever } from 'react-icons/md';
import { GrClose } from "react-icons/gr";


const ProjectList = () => {
  const projects = useSelector((state) => state?.add?.project);
  const dispatch = useDispatch();
  
  const [filterText, setFilterText] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [addProject, setAddProject] = useState(false);
  
  const handleDeleteClick = (id) => {
    dispatch(deleteProject(id));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(filterText.trim().toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const handleClearFilter = () => {
    setFilteredProjects(null);
    setFilterText(""); // Reset the filterText state when clearing the filter
  };
  const openProjectForm = () => {
    setAddProject(true)
  }

  const closeProjectModal = () => {
    setAddProject(false)
  }

  const style={
    maxWidth:"60%",
    margin:"auto"
   }
    

  return (
    <Container style={style}>
      <Row className="align-items-left mt-5 mb-3">
          <Row>
            <h2 className="ml-4">Project List</h2>
          </Row>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <Form>
              <Form.Group controlId="filterText">
                <Form.Control
                  type="text"
                  placeholder="Search Name"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
            <Button variant="primary" onClick={handleFilter} className="mr-2">
              Filter
            </Button>
            <Button
              variant="secondary"
              onClick={handleClearFilter}
              style={{ display: filterText ? 'inline-block' : 'none' }}
            >
              Clear Filter
            </Button>
            <Col  className="d-flex justify-content-end">
        <Button variant="primary" onClick={openProjectForm}>Add Project</Button>
           </Col>
           <Modal show={addProject} onHide={closeProjectModal}>
        <Modal.Header >
          <Modal.Title>Add Project</Modal.Title>
          <span className='bg-secondary px-1 mt-1'>
          <GrClose onClick={closeProjectModal}/></span>
        </Modal.Header>
        <Modal.Body>
          <ProjectAdditionForm></ProjectAdditionForm>
        </Modal.Body>
      </Modal>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Client</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(filteredProjects || projects)?.map((project) => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.client}</td>
                    <td className="text-center">
                      <Button
                        variant="danger"
                        className="bg-danger text-white"
                        onClick={() => handleDeleteClick(project.id)}
                      >
                        <MdDeleteForever/>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
  
    </Container>
  );
};

export default ProjectList;
