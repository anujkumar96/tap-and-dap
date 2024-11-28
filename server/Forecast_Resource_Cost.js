const express = require('express');
const app = express();

// Endpoint to get the forecast of resource cost for a selected Client/Project combination
app.get('/forecast/resource-cost', (req, res) => {
  const { client, project } = req.query;

  // Logic to fetch the forecasted resource cost for the selected Client/Project combination
  const forecastedCost = getForecastedCost(client, project);

  res.json({ forecastedCost });
});

// Function to fetch the forecasted resource cost for a selected Client/Project combination
function getForecastedCost(client, project) {
  // Logic to calculate the forecasted resource cost based on the resource allocation in the system
  // You can use database queries or any other data source to fetch the required data

  // Example implementation:
  const forecastedCost = calculateForecastedCost(client, project);

  return forecastedCost;
}

// Function to calculate the forecasted resource cost based on the resource allocation in the system
function calculateForecastedCost(client, project) {
  // Logic to calculate the forecasted resource cost based on the resource allocation in the system
  // You can use database queries or any other data source to fetch the required data

  // Example implementation:
  const allocatedResources = getAllocatedResources(client, project);
  const forecastedCost = allocatedResources.reduce((totalCost, resource) => {
    return totalCost + resource.cost;
  }, 0);

  return forecastedCost;
}

// Function to fetch the allocated resources for a selected Client/Project combination
function getAllocatedResources(client, project) {
  // Logic to fetch the allocated resources for the selected Client/Project combination
  // You can use database queries or any other data source to fetch the required data

  // Example implementation:
  const allocatedResources = [
    { name: 'Employee 1', cost: 1000 },
    { name: 'Employee 2', cost: 1500 },
    { name: 'Employee 3', cost: 2000 }
  ];

  return allocatedResources;
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});