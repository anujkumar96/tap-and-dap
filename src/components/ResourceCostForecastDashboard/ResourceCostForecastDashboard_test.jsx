
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResourceCostForecastDashboard from './ResourceCostForecastDashboard';

const mockStore = configureStore([]);

describe('ResourceCostForecastDashboard', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      combinations: [
        { id: 1, client: 'Client A', project: 'Project 1' },
        { id: 2, client: 'Client B', project: 'Project 2' },
        { id: 3, client: 'Client C', project: 'Project 3' },
        { id: 4, client: 'Client A', project: 'Project 2' },
        { id: 5, client: 'Client B', project: 'Project 3' }
      ]
    });

    component = render(
      <Provider store={store}>
        <ResourceCostForecastDashboard />
      </Provider>
    );
  });

  it('should render the component', () => {
    const { getByText, getByLabelText } = component;

    expect(getByText('Resource Cost Forecast Dashboard')).toBeInTheDocument();
    expect(getByLabelText('Client')).toBeInTheDocument();
    expect(getByLabelText('Project')).toBeInTheDocument();
    expect(getByText('Filter')).toBeInTheDocument();
    expect(getByText('Filtered Combinations')).toBeInTheDocument();
  });

  it('should update the client state when input value changes', () => {
    const { getByLabelText } = component;
    const clientInput = getByLabelText('Client');

    fireEvent.change(clientInput, { target: { value: 'Client A' } });

    expect(clientInput.value).toBe('Client A');
  });

  it('should update the project state when input value changes', () => {
    const { getByLabelText } = component;
    const projectInput = getByLabelText('Project');

    fireEvent.change(projectInput, { target: { value: 'Project 1' } });

    expect(projectInput.value).toBe('Project 1');
  });

  it('should dispatch filterCombinations action when filter button is clicked', () => {
    const { getByText } = component;
    const filterButton = getByText('Filter');

    fireEvent.click(filterButton);

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'FILTER_COMBINATIONS',
      payload: { client: '', project: '' }
    });
  });

  it('should display filtered combinations', () => {
    store = mockStore({
      combinations: [
        { id: 1, client: 'Client A', project: 'Project 1' },
        { id: 4, client: 'Client A', project: 'Project 2' }
      ]
    });

    component.rerender(
      <Provider store={store}>
        <ResourceCostForecastDashboard />
      </Provider>
    );

    const { getByText } = component;

    expect(getByText('Client A - Project 1')).toBeInTheDocument();
    expect(getByText('Client A - Project 2')).toBeInTheDocument();
  });
});
