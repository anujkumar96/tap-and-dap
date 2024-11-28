
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setLastWorkingDay } from '../actions/employeeActions';

const EmployeeLWD = () => {
  const [lastWorkingDay, setLastWorkingDay] = useState('');

  const dispatch = useDispatch();

  const handleLastWorkingDayChange = (e) => {
    setLastWorkingDay(e.target.value);
  };

  const handleMarkLWD = () => {
    dispatch(setLastWorkingDay(lastWorkingDay));
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="lastWorkingDay">
          <Form.Label>Last Working Day:</Form.Label>
          <Form.Control
            type="date"
            value={lastWorkingDay}
            onChange={handleLastWorkingDayChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleMarkLWD}>
          Mark LWD
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeLWD;
