
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CollectionForecastPage from './CollectionForecastPage';
import store from './store';

describe('CollectionForecastPage', () => {
  test('renders collection forecast page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CollectionForecastPage />
      </Provider>
    );

    const pageTitle = getByText('Collection Forecast Page');
    expect(pageTitle).toBeInTheDocument();
  });

  test('renders forecast data cards', () => {
    const forecastData = [
      { date: '2021-01-01', weather: 'Sunny' },
      { date: '2021-01-02', weather: 'Cloudy' },
      { date: '2021-01-03', weather: 'Rainy' }
    ];

    const { getByText } = render(
      <Provider store={store}>
        <CollectionForecastPage />
      </Provider>
    );

    forecastData.forEach(data => {
      const dateElement = getByText(data.date);
      const weatherElement = getByText(data.weather);
      expect(dateElement).toBeInTheDocument();
      expect(weatherElement).toBeInTheDocument();
    });
  });
});
