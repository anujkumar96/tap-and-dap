import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RevenueForecast from './RevenueForecast';
import { incrementForecast, decrementForecast } from './actions';

const mockStore = configureStore([]);

describe('RevenueForecast', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      forecast: 0
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <RevenueForecast />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the forecast value', () => {
    const { getByText } = component;
    const forecastValue = getByText('0');
    expect(forecastValue).toBeInTheDocument();
  });

  it('should dispatch incrementForecast action when the increment button is clicked', () => {
    const { getByTestId } = component;
    const incrementButton = getByTestId('increment-button');
    fireEvent.click(incrementButton);
    expect(store.dispatch).toHaveBeenCalledWith(incrementForecast());
  });

  it('should dispatch decrementForecast action when the decrement button is clicked', () => {
    const { getByTestId } = component;
    const decrementButton = getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    expect(store.dispatch).toHaveBeenCalledWith(decrementForecast());
  });
});
