
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ExpenseRollUpSummary = () => {
  const expenses = useSelector(state => state.expenses);

  const calculateTotalExpense = () => {
    let totalExpense = 0;
    expenses.forEach(expense => {
      totalExpense += expense.amount;
    });
    return totalExpense;
  };

  const calculateCategoryExpense = (category) => {
    let categoryExpense = 0;
    expenses.forEach(expense => {
      if (expense.category === category) {
        categoryExpense += expense.amount;
      }
    });
    return categoryExpense;
  };

  const calculateSubcategoryExpense = (subcategory) => {
    let subcategoryExpense = 0;
    expenses.forEach(expense => {
      if (expense.subcategory === subcategory) {
        subcategoryExpense += expense.amount;
      }
    });
    return subcategoryExpense;
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Expense Roll-up Summary</Card.Title>
        <Row>
          <Col>
            <h6>Total Expense</h6>
            <p>{calculateTotalExpense()}</p>
          </Col>
          <Col>
            <h6>Category Expenses</h6>
            <ul>
              <li>Category 1: {calculateCategoryExpense('Category 1')}</li>
              <li>Category 2: {calculateCategoryExpense('Category 2')}</li>
              <li>Category 3: {calculateCategoryExpense('Category 3')}</li>
            </ul>
          </Col>
          <Col>
            <h6>Subcategory Expenses</h6>
            <ul>
              <li>Subcategory 1: {calculateSubcategoryExpense('Subcategory 1')}</li>
              <li>Subcategory 2: {calculateSubcategoryExpense('Subcategory 2')}</li>
              <li>Subcategory 3: {calculateSubcategoryExpense('Subcategory 3')}</li>
            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ExpenseRollUpSummary;
