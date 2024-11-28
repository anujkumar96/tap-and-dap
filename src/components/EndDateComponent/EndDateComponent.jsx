
import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EndDateComponent = ({ endDate, handleEndDateChange }) => {
  return (
    <Form.Group>
      <Form.Label>End Date</Form.Label>
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        dateFormat="dd/MM/yyyy"
        className="form-control"
      />
    </Form.Group>
  );
};

export default EndDateComponent;
