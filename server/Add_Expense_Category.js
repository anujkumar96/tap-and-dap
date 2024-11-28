const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Expense Category model
const ExpenseCategory = require('./models/ExpenseCategory');

// Add Expense Category
app.post('/expense-categories', (req, res) => {
  const { category, description } = req.body;

  const newExpenseCategory = new ExpenseCategory({
    category,
    description,
    active: true
  });

  newExpenseCategory.save()
    .then(expenseCategory => res.json(expenseCategory))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Edit Expense Category
app.put('/expense-categories/:id', (req, res) => {
  const { category, description } = req.body;

  ExpenseCategory.findByIdAndUpdate(req.params.id, { category, description }, { new: true })
    .then(expenseCategory => res.json(expenseCategory))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Activate/Deactivate Expense Category
app.patch('/expense-categories/:id', (req, res) => {
  const { active } = req.body;

  ExpenseCategory.findByIdAndUpdate(req.params.id, { active }, { new: true })
    .then(expenseCategory => res.json(expenseCategory))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Reactivate Expense Category
app.patch('/expense-categories/reactivate/:id', (req, res) => {
  ExpenseCategory.findByIdAndUpdate(req.params.id, { active: true }, { new: true })
    .then(expenseCategory => res.json(expenseCategory))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});