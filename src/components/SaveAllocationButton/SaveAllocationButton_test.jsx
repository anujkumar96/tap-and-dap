
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SaveAllocationButton from './SaveAllocationButton';

const mockStore = configureStore([]);

describe('SaveAllocationButton', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <SaveAllocationButton />
      </Provider>
    );
  });

  it('should render the Save Allocation button', () => {
    const { getByText } = component;
    const saveButton = getByText('Save Allocation');
    expect(saveButton).toBeInTheDocument();
  });

  it('should dispatch the saveAllocation action when the button is clicked', () => {
    const { getByText } = component;
    const saveButton = getByText('Save Allocation');
    fireEvent.click(saveButton);
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'SAVE_ALLOCATION' }]);
  });
});
