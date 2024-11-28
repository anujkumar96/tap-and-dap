const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

// Define the data structure for allocation
let allocations = [];

// API endpoint to add an employee to a project
app.post('/allocate', (req, res) => {
  const { project, employee, startDate, endDate, role, allocationPercentage } = req.body;

  // Check if the employee and project exist in the system
  // and if the employee belongs to the BU of the BU head
  // Add the allocation to the allocations array
  allocations.push({
    project,
    employee,
    startDate,
    endDate,
    role,
    allocationPercentage
  });

  res.status(200).json({ message: 'Allocation added successfully' });
});

// API endpoint to edit the allocation of a resource to a project
app.put('/allocate/:allocationId', (req, res) => {
  const allocationId = req.params.allocationId;
  const { project, employee, startDate, endDate, role, allocationPercentage } = req.body;

  // Find the allocation with the given allocationId
  const allocation = allocations.find(allocation => allocation.id === allocationId);

  if (!allocation) {
    return res.status(404).json({ message: 'Allocation not found' });
  }

  // Update the allocation details
  allocation.project = project;
  allocation.employee = employee;
  allocation.startDate = startDate;
  allocation.endDate = endDate;
  allocation.role = role;
  allocation.allocationPercentage = allocationPercentage;

  res.status(200).json({ message: 'Allocation updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});