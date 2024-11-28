
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EditAllocation from './EditAllocation';

const mockStore = configureStore([]);

describe('EditAllocation', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <EditAllocation />
      </Provider>
    );
  });

  it('should render the Edit Allocation button', () => {
    const { getByText } = component;
    const editAllocationButton = getByText('Edit Allocation');
    expect(editAllocationButton).toBeInTheDocument();
  });

  it('should dispatch the editAllocation action when the button is clicked', () => {
    const { getByText } = component;
    const editAllocationButton = getByText('Edit Allocation');
    fireEvent.click(editAllocationButton);
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'EDIT_ALLOCATION' }]);
  });
});
