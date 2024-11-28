
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ClientDeleteConfirmationPage from './ClientDeleteConfirmationPage';
import { deleteClient } from '../actions/clientActions';

const mockStore = configureStore([]);

describe('ClientDeleteConfirmationPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      clients: [],
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ClientDeleteConfirmationPage client={{ id: 1, name: 'John Doe' }} />
      </Provider>
    );
  });

  it('should render the delete button', () => {
    const { getByText } = component;
    const deleteButton = getByText('Delete Client');
    expect(deleteButton).toBeInTheDocument();
  });

  it('should open the modal when delete button is clicked', () => {
    const { getByText } = component;
    const deleteButton = getByText('Delete Client');
    fireEvent.click(deleteButton);
    const modalTitle = getByText('Confirm Delete');
    expect(modalTitle).toBeInTheDocument();
  });

  it('should close the modal when cancel button is clicked', () => {
    const { getByText } = component;
    const deleteButton = getByText('Delete Client');
    fireEvent.click(deleteButton);
    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);
    const modalTitle = getByText('Confirm Delete');
    expect(modalTitle).not.toBeInTheDocument();
  });

  it('should dispatch deleteClient action when delete button in modal is clicked', () => {
    const { getByText } = component;
    const deleteButton = getByText('Delete Client');
    fireEvent.click(deleteButton);
    const confirmDeleteButton = getByText('Delete');
    fireEvent.click(confirmDeleteButton);
    expect(store.dispatch).toHaveBeenCalledWith(deleteClient(1));
  });
});
