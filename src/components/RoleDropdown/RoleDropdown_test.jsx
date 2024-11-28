
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RoleDropdown from './RoleDropdown';

const mockStore = configureStore([]);

describe('RoleDropdown', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      selectedRole: '',
    });

    component = render(
      <Provider store={store}>
        <RoleDropdown roles={['Admin', 'User', 'Guest']} />
      </Provider>
    );
  });

  it('should render the dropdown toggle with the selected role', () => {
    const { getByText } = component;
    const selectedRole = store.getState().selectedRole;
    expect(getByText(selectedRole)).toBeInTheDocument();
  });

  it('should render the dropdown menu with the roles', () => {
    const { getByRole } = component;
    const dropdownMenu = getByRole('menu');
    expect(dropdownMenu).toBeInTheDocument();

    const roles = store.getState().roles;
    roles.forEach((role) => {
      expect(getByText(role)).toBeInTheDocument();
    });
  });

  it('should dispatch the setSelectedRole action on role change', () => {
    const { getByText } = component;
    const role = 'Admin';
    fireEvent.click(getByText(role));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'SET_SELECTED_ROLE', payload: role }]);
  });
});
