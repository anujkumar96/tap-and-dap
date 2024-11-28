
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TextArea from './TextArea';
import { setClientDescription } from '../actions';

const mockStore = configureStore([]);

describe('TextArea', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      clientDescription: 'Initial client description',
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <TextArea />
      </Provider>
    );
  });

  it('should render with the correct initial value', () => {
    const { getByLabelText } = component;
    const textarea = getByLabelText('Client Description');

    expect(textarea.value).toBe('Initial client description');
  });

  it('should dispatch setClientDescription action on textarea change', () => {
    const { getByLabelText } = component;
    const textarea = getByLabelText('Client Description');

    fireEvent.change(textarea, { target: { value: 'New client description' } });

    expect(store.dispatch).toHaveBeenCalledWith(setClientDescription('New client description'));
  });
});
