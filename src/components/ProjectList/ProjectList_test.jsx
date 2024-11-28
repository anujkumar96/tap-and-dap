
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProjectList from './ProjectList';

const mockStore = configureStore([]);

describe('ProjectList', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      projects: [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        { id: 3, name: 'Project 3' }
      ],
      selectedProjectId: null
    });

    component = render(
      <Provider store={store}>
        <ProjectList />
      </Provider>
    );
  });

  it('should render project list', () => {
    const { getByText } = component;
    expect(getByText('Project List')).toBeInTheDocument();
    expect(getByText('Project 1')).toBeInTheDocument();
    expect(getByText('Project 2')).toBeInTheDocument();
    expect(getByText('Project 3')).toBeInTheDocument();
  });

  it('should dispatch selectProject action on project name click', () => {
    const { getByText } = component;
    fireEvent.click(getByText('Project 1'));
    expect(store.getActions()).toEqual([{ type: 'SELECT_PROJECT', payload: 1 }]);
  });

  it('should dispatch deleteProject action on delete button click', () => {
    const { getByText } = component;
    fireEvent.click(getByText('Delete'));
    expect(store.getActions()).toEqual([{ type: 'DELETE_PROJECT', payload: 1 }]);
  });
});
