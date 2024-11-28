
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import CollectionForecastComponent from './CollectionForecastComponent';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('CollectionForecastComponent', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({ forecastData: [] }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render the Collection Forecast component', () => {
    const { getByText } = render(<CollectionForecastComponent />);
    const headerElement = getByText('Collection Forecast');
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the forecast data', () => {
    const forecastData = [
      { date: '2021-01-01', temperature: '25°C', weather: 'Sunny' },
      { date: '2021-01-02', temperature: '20°C', weather: 'Cloudy' }
    ];
    useSelector.mockImplementation(callback => callback({ forecastData }));

    const { getByText } = render(<CollectionForecastComponent />);
    const dateElement1 = getByText('2021-01-01');
    const temperatureElement1 = getByText('25°C');
    const weatherElement1 = getByText('Sunny');
    const dateElement2 = getByText('2021-01-02');
    const temperatureElement2 = getByText('20°C');
    const weatherElement2 = getByText('Cloudy');

    expect(dateElement1).toBeInTheDocument();
    expect(temperatureElement1).toBeInTheDocument();
    expect(weatherElement1).toBeInTheDocument();
    expect(dateElement2).toBeInTheDocument();
    expect(temperatureElement2).toBeInTheDocument();
    expect(weatherElement2).toBeInTheDocument();
  });
});
