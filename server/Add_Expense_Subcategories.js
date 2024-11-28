const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid');

app.use(bodyParser.json());

// Expense Subcategories data
let expenseSubcategories = [
  {
    id: uuid.v4(),
    name: 'Subcategory 1',
    category: 'Category 1',
    description: 'Description 1',
    isActive: true
  },
  {
    id: uuid.v4(),
    name: 'Subcategory 2',
    category: 'Category 2',
    description: 'Description 2',
    isActive: true
  },
  {
    id: uuid.v4(),
    name: 'Subcategory 3',
    category: 'Category 1',
    description: 'Description 3',
    isActive: false
  }
];

// Get all Expense Subcategories
app.get('/expenseSubcategories', (req, res) => {
  res.json(expenseSubcategories);
});

// Add Expense Subcategory
app.post('/expenseSubcategories', (req, res) => {
  const { name, category, description } = req.body;

  // Check if Expense Category exists
  const categoryExists = expenseSubcategories.some(subcategory => subcategory.category === category);
  if (!categoryExists) {
    return res.status(400).json({ error: 'Expense Category does not exist' });
  }

  const newSubcategory = {
    id: uuid.v4(),
    name,
    category,
    description,
    isActive: true
  };

  expenseSubcategories.push(newSubcategory);
  res.status(201).json(newSubcategory);
});

// Edit Expense Subcategory
app.put('/expenseSubcategories/:id', (req, res) => {
  const { id } = req.params;
  const { name, category, description } = req.body;

  const subcategory = expenseSubcategories.find(subcategory => subcategory.id === id);
  if (!subcategory) {
    return res.status(404).json({ error: 'Expense Subcategory not found' });
  }

  // Check if Expense Category exists
  const categoryExists = expenseSubcategories.some(subcategory => subcategory.category === category);
  if (!categoryExists) {
    return res.status(400).json({ error: 'Expense Category does not exist' });
  }

  subcategory.name = name;
  subcategory.category = category;
  subcategory.description = description;

  res.json(subcategory);
});

// Activate/Deactivate Expense Subcategory
app.patch('/expenseSubcategories/:id', (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;

  const subcategory = expenseSubcategories.find(subcategory => subcategory.id === id);
  if (!subcategory) {
    return res.status(404).json({ error: 'Expense Subcategory not found' });
  }

  subcategory.isActive = isActive;

  res.json(subcategory);
});

// Reactivate Expense Subcategory
app.patch('/expenseSubcategories/reactivate/:id', (req, res) => {
  const { id } = req.params;

  const subcategory = expenseSubcategories.find(subcategory => subcategory.id === id);
  if (!subcategory) {
    return res.status(404).json({ error: 'Expense Subcategory not found' });
  }

  subcategory.isActive = true;

  res.json(subcategory);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});