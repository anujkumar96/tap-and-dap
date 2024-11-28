const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Add project
app.post('/projects', (req, res) => {
  const project = req.body;
  // Save project to database
  // Return success response
  res.status(200).json({ message: 'Project added successfully' });
});

// Edit project
app.put('/projects/:projectId', (req, res) => {
  const projectId = req.params.projectId;
  const updatedProject = req.body;
  // Update project in database
  // Return success response
  res.status(200).json({ message: 'Project updated successfully' });
});

// Add revenue forecast
app.post('/projects/:projectId/revenue-forecast', (req, res) => {
  const projectId = req.params.projectId;
  const forecast = req.body;
  // Save revenue forecast to database
  // Return success response
  res.status(200).json({ message: 'Revenue forecast added successfully' });
});

// Edit revenue forecast
app.put('/projects/:projectId/revenue-forecast/:forecastId', (req, res) => {
  const projectId = req.params.projectId;
  const forecastId = req.params.forecastId;
  const updatedForecast = req.body;
  // Update revenue forecast in database
  // Return success response
  res.status(200).json({ message: 'Revenue forecast updated successfully' });
});

// Add collection forecast
app.post('/projects/:projectId/collection-forecast', (req, res) => {
  const projectId = req.params.projectId;
  const forecast = req.body;
  // Save collection forecast to database
  // Return success response
  res.status(200).json({ message: 'Collection forecast added successfully' });
});

// Edit collection forecast
app.put('/projects/:projectId/collection-forecast/:forecastId', (req, res) => {
  const projectId = req.params.projectId;
  const forecastId = req.params.forecastId;
  const updatedForecast = req.body;
  // Update collection forecast in database
  // Return success response
  res.status(200).json({ message: 'Collection forecast updated successfully' });
});

// Add revenue actuals
app.post('/projects/:projectId/revenue-actuals', (req, res) => {
  const projectId = req.params.projectId;
  const actuals = req.body;
  // Save revenue actuals to database
  // Return success response
  res.status(200).json({ message: 'Revenue actuals added successfully' });
});

// Edit revenue actuals
app.put('/projects/:projectId/revenue-actuals/:actualsId', (req, res) => {
  const projectId = req.params.projectId;
  const actualsId = req.params.actualsId;
  const updatedActuals = req.body;
  // Update revenue actuals in database
  // Return success response
  res.status(200).json({ message: 'Revenue actuals updated successfully' });
});

// Add collection actuals
app.post('/projects/:projectId/collection-actuals', (req, res) => {
  const projectId = req.params.projectId;
  const actuals = req.body;
  // Save collection actuals to database
  // Return success response
  res.status(200).json({ message: 'Collection actuals added successfully' });
});

// Edit collection actuals
app.put('/projects/:projectId/collection-actuals/:actualsId', (req, res) => {
  const projectId = req.params.projectId;
  const actualsId = req.params.actualsId;
  const updatedActuals = req.body;
  // Update collection actuals in database
  // Return success response
  res.status(200).json({ message: 'Collection actuals updated successfully' });
});

// Add notes
app.post('/projects/:projectId/notes', (req, res) => {
  const projectId = req.params.projectId;
  const notes = req.body;
  // Save notes to database
  // Return success response
  res.status(200).json({ message: 'Notes added successfully' });
});

// Edit notes
app.put('/projects/:projectId/notes/:noteId', (req, res) => {
  const projectId = req.params.projectId;
  const noteId = req.params.noteId;
  const updatedNotes = req.body;
  // Update notes in database
  // Return success response
  res.status(200).json({ message: 'Notes updated successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});