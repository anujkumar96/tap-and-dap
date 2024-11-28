
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ClientProjectSelectionPage from './ClientProjectSelectionPage';
import { selectClient, selectProject } from './actions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('ClientProjectSelectionPage', () => {
  const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' }
  ];
  const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' }
  ];
  const selectedClient = { id: 1, name: 'Client 1' };
  const selectedProject = { id: 1, name: 'Project 1' };
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      clients,
      projects,
      selectedClient,
      selectedProject
    }));
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    dispatch.mockClear();
  });

  test('renders client/project selection page', () => {
    const { getByText, getByTestId } = render(<ClientProjectSelectionPage />);
    const pageTitle = getByText('Client/Project Selection Page');
    const clientDropdown = getByTestId('client-dropdown');
    const projectDropdown = getByTestId('project-dropdown');
    const continueButton = getByText('Continue');

    expect(pageTitle).toBeInTheDocument();
    expect(clientDropdown).toBeInTheDocument();
    expect(projectDropdown).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });

  test('displays selected client and project names in dropdown toggles', () => {
    const { getByTestId } = render(<ClientProjectSelectionPage />);
    const clientDropdownToggle = getByTestId('client-dropdown-toggle');
    const projectDropdownToggle = getByTestId('project-dropdown-toggle');

    expect(clientDropdownToggle).toHaveTextContent('Client 1');
    expect(projectDropdownToggle).toHaveTextContent('Project 1');
  });

  test('dispatches selectClient action on client dropdown item click', () => {
    const { getByText } = render(<ClientProjectSelectionPage />);
    const clientDropdownItem = getByText('Client 2');

    fireEvent.click(clientDropdownItem);

    expect(dispatch).toHaveBeenCalledWith(selectClient(2));
  });

  test('dispatches selectProject action on project dropdown item click', () => {
    const { getByText } = render(<ClientProjectSelectionPage />);
    const projectDropdownItem = getByText('Project 2');

    fireEvent.click(projectDropdownItem);

    expect(dispatch).toHaveBeenCalledWith(selectProject(2));
  });

  test('disables continue button if no client or project is selected', () => {
    useSelector.mockImplementation((selector) => selector({
      clients,
      projects,
      selectedClient: null,
      selectedProject: null
    }));

    const { getByText } = render(<ClientProjectSelectionPage />);
    const continueButton = getByText('Continue');

    expect(continueButton).toBeDisabled();
  });

  test('enables continue button if client and project are selected', () => {
    const { getByText } = render(<ClientProjectSelectionPage />);
    const continueButton = getByText('Continue');

    expect(continueButton).toBeEnabled();
  });
});
