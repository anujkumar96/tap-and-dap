import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ExpenseRollUpPage.scss';

const ExpenseRollUpPage = () => {
  const expenses = useSelector(state => state.expenses);

  return (
    <Container>
      <Row>
        {expenses.map(expense => (
          <Col key={expense.id} md={4}>
            <Card>
              <Card.Header>{expense.bu}</Card.Header>
              <Card.Body>
                <Card.Title>{expense.category}</Card.Title>
                <Card.Text>{expense.subcategory}</Card.Text>
                <Card.Text>{expense.forecast}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExpenseRollUpPage;
 
// ExpenseRollUpPage.scss

.Container {
  padding: 20px;
}

.Card {
  margin-bottom: 20px;
}

.Card.Header {
  background-color: #f8f9fa;
  font-weight: bold;
}

.Card.Body {
  background-color: #ffffff;
}

.Card.Title {
  font-weight: bold;
}

.Card.Text {
  margin-bottom: 10px;
}