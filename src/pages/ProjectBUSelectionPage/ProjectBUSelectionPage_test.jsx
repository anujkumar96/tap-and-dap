
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProjectBUSelectionPage from './ProjectBUSelectionPage';

const mockStore = configureStore([]);

describe('ProjectBUSelectionPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      projects: [
        { id: 1, name: 'Project 1', bus: [{ id: 1, name: 'BU 1' }, { id: 2, name: 'BU 2' }] },
        { id: 2, name: 'Project 2', bus: [{ id: 3, name: 'BU 3' }, { id: 4, name: 'BU 4' }] },
      ],
      selectedProject: null,
      selectedBU: null
    });

    component = render(
      <Provider store={store}>
        <ProjectBUSelectionPage />
      </Provider>
    );
  });

  it('should render the component', () => {
    const { getByText } = component;
    expect(getByText('Project/BU Selection Page')).toBeInTheDocument();
  });

  it('should select a project', () => {
    const { getByText, getByTestId } = component;
    fireEvent.click(getByTestId('project-dropdown-toggle'));
    fireEvent.click(getByText('Project 1'));
    expect(store.getActions()).toEqual([{ type: 'SELECT_PROJECT', payload: 1 }]);
  });

  it('should select a BU', () => {
    const { getByText, getByTestId } = component;
    fireEvent.click(getByTestId('project-dropdown-toggle'));
    fireEvent.click(getByText('Project 1'));
    fireEvent.click(getByTestId('bu-dropdown-toggle'));
    fireEvent.click(getByText('BU 1'));
    expect(store.getActions()).toEqual([{ type: 'SELECT_PROJECT', payload: 1 }, { type: 'SELECT_BU', payload: 1 }]);
  });

  it('should disable the continue button if no BU is selected', () => {
    const { getByText, getByTestId } = component;
    fireEvent.click(getByTestId('project-dropdown-toggle'));
    fireEvent.click(getByText('Project 1'));
    expect(getByText('Continue')).toBeDisabled();
  });

  it('should enable the continue button if a BU is selected', () => {
    const { getByText, getByTestId } = component;
    fireEvent.click(getByTestId('project-dropdown-toggle'));
    fireEvent.click(getByText('Project 1'));
    fireEvent.click(getByTestId('bu-dropdown-toggle'));
    fireEvent.click(getByText('BU 1'));
    expect(getByText('Continue')).toBeEnabled();
  });
});
