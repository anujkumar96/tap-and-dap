const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Employee data storage
let employees = [];

// Add employee
app.post('/employees', (req, res) => {
  const { name, designation, supervisor, bu, project, allocation, cost } = req.body;
  
  // Validate required fields
  if (!name || !designation || !supervisor || !bu || !project || !allocation || !cost) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Create new employee object
  const employee = {
    name,
    designation,
    supervisor,
    bu,
    project,
    allocation,
    cost,
    notes: []
  };
  
  // Add employee to the list
  employees.push(employee);
  
  res.status(201).json({ message: 'Employee added successfully' });
});

// Edit employee
app.put('/employees/:id', (req, res) => {
  const { id } = req.params;
  const { name, designation, supervisor, bu, project, allocation, cost } = req.body;
  
  // Find employee by id
  const employee = employees.find(emp => emp.id === id);
  
  // Check if employee exists
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  
  // Update employee data
  employee.name = name || employee.name;
  employee.designation = designation || employee.designation;
  employee.supervisor = supervisor || employee.supervisor;
  employee.bu = bu || employee.bu;
  employee.project = project || employee.project;
  employee.allocation = allocation || employee.allocation;
  employee.cost = cost || employee.cost;
  
  res.json({ message: 'Employee updated successfully' });
});

// Mark LWD for employee
app.put('/employees/:id/lwd', (req, res) => {
  const { id } = req.params;
  
  // Find employee by id
  const employee = employees.find(emp => emp.id === id);
  
  // Check if employee exists
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  
  // Mark LWD and set forecasted cost to zero
  employee.lwd = true;
  employee.cost = 0;
  
  res.json({ message: 'LWD marked successfully' });
});

// Add notes to employee cost
app.post('/employees/:id/notes', (req, res) => {
  const { id } = req.params;
  const { note } = req.body;
  
  // Find employee by id
  const employee = employees.find(emp => emp.id === id);
  
  // Check if employee exists
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  
  // Add note to employee's notes array
  employee.notes.push(note);
  
  res.status(201).json({ message: 'Note added successfully' });
});

// View employee notes
app.get('/employees/:id/notes', (req, res) => {
  const { id } = req.params;
  
  // Find employee by id
  const employee = employees.find(emp => emp.id === id);
  
  // Check if employee exists
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  
  res.json({ notes: employee.notes });
});

// Add additional notes to employee cost (BU head)
app.post('/employees/:id/notes/additional', (req, res) => {
  const { id } = req.params;
  const { note } = req.body;
  
  // Find employee by id
  const employee = employees.find(emp => emp.id === id);
  
  // Check if employee exists
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  
  // Add additional note to employee's notes array
  employee.notes.push(note);
  
  res.status(201).json({ message: 'Additional note added successfully' });
});

// View additional employee notes (BU head)
app.get('/employees/:id/notes/additional', (req, res) => {
  const { id } = req.params;
  
  // Find employee by id
  const employee = employees.find(emp => emp.id === id);
  
  // Check if employee exists
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  
  res.json({ additionalNotes: employee.notes });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});