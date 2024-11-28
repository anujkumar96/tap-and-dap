
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setLastWorkingDay } from '../actions/employeeActions';

const LastWorkingDayForm = () => {
  const [lastWorkingDay, setLastWorkingDay] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLastWorkingDay(lastWorkingDay));
    setLastWorkingDay('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="lastWorkingDay">
        <Form.Label>Last Working Day</Form.Label>
        <Form.Control
          type="date"
          value={lastWorkingDay}
          onChange={(e) => setLastWorkingDay(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LastWorkingDayForm;
