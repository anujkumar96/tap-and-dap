
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import CostForm from './CostForm';
import store from '../store';

describe('CostForm', () => {
  test('should dispatch addCost action on form submission', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <CostForm />
      </Provider>
    );

    const nameInput = getByLabelText('Name');
    const costInput = getByLabelText('Cost');
    const addButton = getByText('Add Cost');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(costInput, { target: { value: '1000' } });
    fireEvent.click(addButton);

    const state = store.getState();
    expect(state.costs).toEqual([{ name: 'John Doe', cost: '1000' }]);
  });
});
