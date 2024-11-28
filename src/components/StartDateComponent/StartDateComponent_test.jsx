
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StartDateComponent from './StartDateComponent';

const mockStore = configureStore([]);

describe('StartDateComponent', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      startDate: new Date(),
    });

    component = render(
      <Provider store={store}>
        <StartDateComponent />
      </Provider>
    );
  });

  it('should render the StartDateComponent', () => {
    const { getByLabelText } = component;
    const startDateLabel = getByLabelText('Start Date:');
    expect(startDateLabel).toBeInTheDocument();
  });

  it('should dispatch setStartDate action on date change', () => {
    const { getByLabelText } = component;
    const startDateInput = getByLabelText('Start Date:');
    const newDate = new Date('2022-01-01');

    fireEvent.change(startDateInput, { target: { value: newDate } });

    const actions = store.getActions();
    expect(actions[0].type).toEqual('SET_START_DATE');
    expect(actions[0].payload).toEqual(newDate);
  });
});
