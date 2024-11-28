
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CollectionActualsPage from './CollectionActualsPage';
import { fetchCollectionActuals, deleteCollectionActual } from '../actions/collectionActualsActions';

const mockStore = configureStore([]);

describe('CollectionActualsPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      collectionActuals: [
        { id: 1, name: 'Collection 1', amount: 100 },
        { id: 2, name: 'Collection 2', amount: 200 },
      ],
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <CollectionActualsPage />
      </Provider>
    );
  });

  it('should render the component', () => {
    expect(screen.getByText('Collection Actuals Page')).toBeInTheDocument();
  });

  it('should fetch collection actuals data on component mount', () => {
    expect(store.dispatch).toHaveBeenCalledWith(fetchCollectionActuals());
  });

  it('should render collection actuals data', () => {
    expect(screen.getByText('Collection 1')).toBeInTheDocument();
    expect(screen.getByText('Collection 2')).toBeInTheDocument();
  });

  it('should dispatch deleteCollectionActual action on delete button click', () => {
    fireEvent.click(screen.getByText('Delete'));

    expect(store.dispatch).toHaveBeenCalledWith(deleteCollectionActual(1));
  });
});
