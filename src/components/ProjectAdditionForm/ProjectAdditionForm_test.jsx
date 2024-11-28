
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

    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Description')).toBeInTheDocument();
    expect(getByLabelText('Tech Stack')).toBeInTheDocument();
    expect(getByLabelText('Billing')).toBeInTheDocument();
    expect(getByLabelText('Delivery Business Unit')).toBeInTheDocument();
    expect(getByText('Add Project')).toBeInTheDocument();
  });

  it('should dispatch addProject action on form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Project 1' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Project description' } });
    fireEvent.change(getByLabelText('Tech Stack'), { target: { value: 'React, Redux' } });
    fireEvent.change(getByLabelText('Billing'), { target: { value: 'Hourly' } });
    fireEvent.change(getByLabelText('Delivery Business Unit'), { target: { value: 'IT' } });

    fireEvent.click(getByText('Add Project'));

    expect(store.dispatch).toHaveBeenCalledWith(addProject({
      name: 'Project 1',
      description: 'Project description',
      techStack: 'React, Redux',
      billing: 'Hourly',
      deliveryBusinessUnit: 'IT'
    }));
  });

  it('should clear the form fields after form submission', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Project 1' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Project description' } });
    fireEvent.change(getByLabelText('Tech Stack'), { target: { value: 'React, Redux' } });
    fireEvent.change(getByLabelText('Billing'), { target: { value: 'Hourly' } });
    fireEvent.change(getByLabelText('Delivery Business Unit'), { target: { value: 'IT' } });

    fireEvent.click(getByText('Add Project'));

    expect(getByLabelText('Name').value).toBe('');
    expect(getByLabelText('Description').value).toBe('');
    expect(getByLabelText('Tech Stack').value).toBe('');
    expect(getByLabelText('Billing').value).toBe('');
    expect(getByLabelText('Delivery Business Unit').value).toBe('');
  });
});
