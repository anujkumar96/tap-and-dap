import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allocateProject } from "../../store/reducers/counterSlice";
import { useLocation, useNavigate } from "react-router-dom";

const AllocationForm = (props) => {
  const [project, setProject] = useState("");
  const [employee, setEmployee] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [role, setRole] = useState("");
  const [allocationPercentage, setallocationPercentage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const passedData = location.state;
  const projectOptions=[];
  const projects = useSelector((state) => state?.add?.project);
  projects.map((data)=>{
    let project={
      label:data.name,
      value:data.name
    }
    projectOptions.push(project)
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allocateProject({ ...passedData, project, allocationPercentage }));
    // Reset form fields
    setProject("");
    setEmployee("");
    setStartDate("");
    setEndDate("");
    setRole("");
    setallocationPercentage("");
    navigate(-1);
  };
  const style = {
    maxWidth: "60%",
    margin: "auto",
  };

  return (
    <div style={style}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="project">
          <Form.Label>Project</Form.Label>
          <Form.Select
            className="custom-select"
            aria-label="Select project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
           {projectOptions.map((option)=>{
            return(
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
            )
           })}
          </Form.Select>
        </Form.Group>

        {/* <Form.Group controlId="employee">
        <Form.Label>Employee</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter employee"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </Form.Group> */}

        <Form.Group controlId="allocation">
          <Form.Label>Allocation (%)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter allocation"
            value={allocationPercentage}
            onChange={(e) => setallocationPercentage(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-2" variant="primary" type="submit">
          Allocate
        </Button>
      </Form>
    </div>
  );
};

export default AllocationForm;
