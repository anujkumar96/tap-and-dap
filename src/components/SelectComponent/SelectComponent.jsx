
import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry, setCurrency, setPaymentTerm } from '../actions';

const SelectComponent = ({ label, options, value, onChange }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default SelectComponent;
