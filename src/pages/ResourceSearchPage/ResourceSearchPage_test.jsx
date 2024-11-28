
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResourceSearchPage from './ResourceSearchPage';
import { searchResource } from '../actions/resourceActions';

const mockStore = configureStore([]);

describe('ResourceSearchPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <ResourceSearchPage />
      </Provider>
    );
  });

  it('should render the search input and button', () => {
    const { getByPlaceholderText, getByText } = component;
    const searchInput = getByPlaceholderText('Search');
    const searchButton = getByText('Search');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should update the search term when input value changes', () => {
    const { getByPlaceholderText } = component;
    const searchInput = getByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });

  it('should dispatch searchResource action when search button is clicked', () => {
    const { getByText } = component;
    const searchButton = getByText('Search');

    fireEvent.click(searchButton);

    expect(store.dispatch).toHaveBeenCalledWith(searchResource(''));
  });
});
