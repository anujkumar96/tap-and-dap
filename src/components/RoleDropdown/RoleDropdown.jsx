
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const RoleDropdown = ({ roles, selectedRole, onRoleChange }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="role-dropdown">
        {selectedRole}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {roles.map((role) => (
          <Dropdown.Item key={role} onClick={() => onRoleChange(role)}>
            {role}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RoleDropdown;
