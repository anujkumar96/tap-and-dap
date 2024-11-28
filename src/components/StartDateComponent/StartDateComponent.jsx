
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StartDateComponent = ({ startDate, handleStartDateChange }) => {
  return (
    <div>
      <label htmlFor="start-date">Start Date:</label>
      <DatePicker
        id="start-date"
        selected={startDate}
        onChange={handleStartDateChange}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
};

export default StartDateComponent;
