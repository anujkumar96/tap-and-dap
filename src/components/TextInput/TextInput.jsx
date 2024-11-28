
import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateTextInput } from '../actions';

const TextInput = ({ label, name }) => {
  const value = useSelector(state => state[name]);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateTextInput(name, e.target.value));
  };

  return (
    <Form>
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type="text"
          value={value}
          onChange={handleChange}
        />
      </FormGroup>
    </Form>
  );
};

export default TextInput;
