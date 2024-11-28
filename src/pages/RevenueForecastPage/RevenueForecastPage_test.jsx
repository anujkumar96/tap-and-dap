import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { fetchRevenueForecast } from '../actions/revenueActions';
import RevenueForecastPage from './RevenueForecastPage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('../actions/revenueActions', () => ({
  fetchRevenueForecast: jest.fn()
}));

describe('RevenueForecastPage', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchRevenueForecast.mockClear();
  });

  test('renders RevenueForecastPage component', () => {
    useSelector.mockReturnValueOnce(null);
    useDispatch.mockReturnValueOnce(jest.fn());

    render(<RevenueForecastPage />);

    expect(screen.getByText('Revenue Forecast')).toBeInTheDocument();
    expect(screen.getByText('Fetch Forecast')).toBeInTheDocument();
  });

  test('dispatches fetchRevenueForecast action when Fetch Forecast button is clicked', () => {
    useSelector.mockReturnValueOnce(null);
    const dispatch = jest.fn();
    useDispatch.mockReturnValueOnce(dispatch);

    render(<RevenueForecastPage />);

    fireEvent.click(screen.getByText('Fetch Forecast'));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(fetchRevenueForecast).toHaveBeenCalledTimes(1);
  });

  test('renders revenue forecast when it is available', () => {
    useSelector.mockReturnValueOnce('1000');

    render(<RevenueForecastPage />);

    expect(screen.getByText('Forecast:')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });

  test('does not render revenue forecast when it is not available', () => {
    useSelector.mockReturnValueOnce(null);

    render(<RevenueForecastPage />);

    expect(screen.queryByText('Forecast:')).toBeNull();
    expect(screen.queryByText('1000')).toBeNull();
  });
});