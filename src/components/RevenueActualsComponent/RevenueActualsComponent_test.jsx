
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import RevenueActualsComponent from './RevenueActualsComponent';
import { fetchRevenueActuals } from '../actions/revenueActions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('../actions/revenueActions', () => ({
  fetchRevenueActuals: jest.fn()
}));

describe('RevenueActualsComponent', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchRevenueActuals.mockClear();
  });

  test('renders the component', () => {
    useSelector.mockReturnValueOnce([{ id: 1, date: '2022-01-01', amount: 100 }]);
    render(<RevenueActualsComponent />);
    
    expect(screen.getByText('Revenue Actuals')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('2022-01-01')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  test('dispatches fetchRevenueActuals action on mount', () => {
    useDispatch.mockReturnValueOnce(jest.fn());
    render(<RevenueActualsComponent />);
    
    expect(fetchRevenueActuals).toHaveBeenCalledTimes(1);
  });
});
