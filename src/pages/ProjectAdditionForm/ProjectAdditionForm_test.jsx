
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProjectAdditionForm from './ProjectAdditionForm';
import { addProject } from '../actions/projectActions';

const mockStore = configureStore([]);

describe('ProjectAdditionForm', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <ProjectAdditionForm />
      </Provider>
    );
  });

  it('should render the form correctly', () => {
    const { getByLabelText, getByText } = component;

    expect(getByLabelText('Project Name')).toBeInTheDocument();
    expect(getByLabelText('Client')).toBeInTheDocument();
    expect(getByText('Add Project')).toBeInTheDocument();
  });

  it('should dispatch addProject action on form submission', () => {
    const { getByLabelText, getByText } = component;

    const nameInput = getByLabelText('Project Name');
    const clientInput = getByLabelText('Client');
    const addButton = getByText('Add Project');

    fireEvent.change(nameInput, { target: { value: 'Project 1' } });
    fireEvent.change(clientInput, { target: { value: 'Client 1' } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addProject({ name: 'Project 1', client: 'Client 1' }));
  });

  it('should clear the input fields on form submission', () => {
    const { getByLabelText, getByText } = component;

    const nameInput = getByLabelText('Project Name');
    const clientInput = getByLabelText('Client');
    const addButton = getByText('Add Project');

    fireEvent.change(nameInput, { target: { value: 'Project 1' } });
    fireEvent.change(clientInput, { target: { value: 'Client 1' } });
    fireEvent.click(addButton);

    expect(nameInput.value).toBe('');
    expect(clientInput.value).toBe('');
  });
});
