import React from 'react';
import { render } from '@testing-library/react';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  it('renders the component without errors', () => {
    render(<DashboardPage />);
  });

  it('displays the title "Dashboard"', () => {
    const { getByText } = render(<DashboardPage />);
    const titleElement = getByText('Dashboard');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the forecasted resource cost chart', () => {
    const { getByText } = render(<DashboardPage />);
    const chartElement = getByText('Forecasted Resource Cost');
    expect(chartElement).toBeInTheDocument();
  });
});