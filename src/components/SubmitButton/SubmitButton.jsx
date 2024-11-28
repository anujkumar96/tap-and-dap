
import React from 'react';
import Button from 'react-bootstrap/Button';

const SubmitButton = ({ onClick }) => {
  return (
    <Button variant="primary" onClick={onClick}>
      Submit
    </Button>
  );
};

export default SubmitButton;
