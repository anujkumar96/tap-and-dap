
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ResourceCostForecastPage from './ResourceCostForecastPage';
import { fetchResourceCostForecast } from '../actions/resourceActions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('../actions/resourceActions', () => ({
  fetchResourceCostForecast: jest.fn()
}));

describe('ResourceCostForecastPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      clients: [
        { id: 1, name: 'Client 1' },
        { id: 2, name: 'Client 2' }
      ],
      projects: [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' }
      ]
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchResourceCostForecast.mockClear();
  });

  test('renders the component', () => {
    render(<ResourceCostForecastPage />);
    expect(screen.getByLabelText('Client')).toBeInTheDocument();
    expect(screen.getByLabelText('Project')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('selects a client', () => {
    render(<ResourceCostForecastPage />);
    fireEvent.click(screen.getByText('Select Client'));
    fireEvent.click(screen.getByText('Client 1'));
    expect(screen.getByText('Client 1')).toBeInTheDocument();
  });

  test('selects a project', () => {
    render(<ResourceCostForecastPage />);
    fireEvent.click(screen.getByText('Select Project'));
    fireEvent.click(screen.getByText('Project 1'));
    expect(screen.getByText('Project 1')).toBeInTheDocument();
  });

  test('dispatches fetchResourceCostForecast action on search button click', async () => {
    useDispatch.mockReturnValue(jest.fn());
    render(<ResourceCostForecastPage />);
    fireEvent.click(screen.getByText('Search'));
    await waitFor(() => {
      expect(fetchResourceCostForecast).toHaveBeenCalledTimes(1);
      expect(fetchResourceCostForecast).toHaveBeenCalledWith('', '');
    });
  });
});
