import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import ReportsPage from '../ReportsPage';
import { fetchReports } from '../actions/reportsActions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('../actions/reportsActions', () => ({
  fetchReports: jest.fn()
}));

describe('ReportsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ reports: [] }));
    useDispatch.mockReturnValue(jest.fn());
    render(<ReportsPage />);
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test('renders ReportsPage component', () => {
    expect(screen.getByText('Reports Page')).toBeInTheDocument();
  });

  test('renders Generate Reports button', () => {
    expect(screen.getByText('Generate Reports')).toBeInTheDocument();
  });

  test('dispatches fetchReports action when Generate Reports button is clicked', () => {
    const dispatch = useDispatch();
    const generateReportsButton = screen.getByText('Generate Reports');
    fireEvent.click(generateReportsButton);
    expect(dispatch).toHaveBeenCalledWith(fetchReports());
  });

  test('renders table with correct headers', () => {
    const tableHeaders = screen.getAllByRole('columnheader');
    expect(tableHeaders[0]).toHaveTextContent('Resource');
    expect(tableHeaders[1]).toHaveTextContent('Allocation');
  });

  test('renders table rows with correct data', () => {
    useSelector.mockImplementation(callback =>
      callback({
        reports: [
          { id: 1, resource: 'Resource 1', allocation: 'Allocation 1' },
          { id: 2, resource: 'Resource 2', allocation: 'Allocation 2' }
        ]
      })
    );

    const tableRows = screen.getAllByRole('row');
    expect(tableRows[1]).toHaveTextContent('Resource 1');
    expect(tableRows[1]).toHaveTextContent('Allocation 1');
    expect(tableRows[2]).toHaveTextContent('Resource 2');
    expect(tableRows[2]).toHaveTextContent('Allocation 2');
  });
});
