
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ClientSearchPage from './ClientSearchPage';
import { searchClients } from '../actions/clientActions';

const mockStore = configureStore([]);

describe('ClientSearchPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ClientSearchPage />
      </Provider>
    );
  });

  it('should render the search criteria input field', () => {
    const { getByLabelText } = component;
    const searchCriteriaInput = getByLabelText('Search Criteria');
    expect(searchCriteriaInput).toBeInTheDocument();
  });

  it('should update the search criteria state when input value changes', () => {
    const { getByLabelText } = component;
    const searchCriteriaInput = getByLabelText('Search Criteria');
    fireEvent.change(searchCriteriaInput, { target: { value: 'test' } });
    expect(searchCriteriaInput.value).toBe('test');
  });

  it('should dispatch searchClients action when search button is clicked', () => {
    const { getByText } = component;
    const searchButton = getByText('Search');
    fireEvent.click(searchButton);
    expect(store.dispatch).toHaveBeenCalledWith(searchClients(''));
  });
});
