
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResourceAllocationEditPage from './ResourceAllocationEditPage';
import { updateResourceAllocation } from '../actions/resourceActions';

const mockStore = configureStore([]);

describe('ResourceAllocationEditPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      resource: {
        startDate: '2022-01-01',
        endDate: '2022-01-31',
        role: 'Developer',
        percentageAllocation: 50
      }
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ResourceAllocationEditPage />
      </Provider>
    );
  });

  it('should render the component', () => {
    const { getByText, getByLabelText } = component;

    expect(getByText('Resource Allocation Edit Page')).toBeInTheDocument();
    expect(getByLabelText('Start Date')).toBeInTheDocument();
    expect(getByLabelText('End Date')).toBeInTheDocument();
    expect(getByLabelText('Role')).toBeInTheDocument();
    expect(getByLabelText('Percentage Allocation')).toBeInTheDocument();
    expect(getByText('Update')).toBeInTheDocument();
  });

  it('should update resource allocation on button click', () => {
    const { getByLabelText, getByText } = component;

    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2022-02-01' } });
    fireEvent.change(getByLabelText('End Date'), { target: { value: '2022-02-28' } });
    fireEvent.change(getByLabelText('Role'), { target: { value: 'Designer' } });
    fireEvent.change(getByLabelText('Percentage Allocation'), { target: { value: 75 } });

    fireEvent.click(getByText('Update'));

    expect(store.dispatch).toHaveBeenCalledWith(
      updateResourceAllocation({
        startDate: '2022-02-01',
        endDate: '2022-02-28',
        role: 'Designer',
        percentageAllocation: 75
      })
    );
  });
});
