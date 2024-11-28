
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ClientProjectDropdown from './ClientProjectDropdown';

const mockStore = configureStore([]);

describe('ClientProjectDropdown', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      clients: [
        { id: 1, name: 'Client 1' },
        { id: 2, name: 'Client 2' },
      ],
      projects: [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
      ],
      selectedClient: null,
      selectedProject: null,
    });

    component = render(
      <Provider store={store}>
        <ClientProjectDropdown />
      </Provider>
    );
  });

  it('should render the dropdowns', () => {
    const { getByText } = component;

    expect(getByText('Select Client')).toBeInTheDocument();
    expect(getByText('Select Project')).toBeInTheDocument();
  });

  it('should display the selected client and project', () => {
    store = mockStore({
      clients: [
        { id: 1, name: 'Client 1' },
        { id: 2, name: 'Client 2' },
      ],
      projects: [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
      ],
      selectedClient: { id: 1, name: 'Client 1' },
      selectedProject: { id: 1, name: 'Project 1' },
    });

    component.rerender(
      <Provider store={store}>
        <ClientProjectDropdown />
      </Provider>
    );

    const { getByText } = component;

    expect(getByText('Client 1')).toBeInTheDocument();
    expect(getByText('Project 1')).toBeInTheDocument();
  });

  it('should dispatch selectClient action on client change', () => {
    const { getByText } = component;

    fireEvent.click(getByText('Select Client'));
    fireEvent.click(getByText('Client 1'));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'SELECT_CLIENT', payload: 1 });
  });

  it('should dispatch selectProject action on project change', () => {
    const { getByText } = component;

    fireEvent.click(getByText('Select Project'));
    fireEvent.click(getByText('Project 1'));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'SELECT_PROJECT', payload: 1 });
  });
});
