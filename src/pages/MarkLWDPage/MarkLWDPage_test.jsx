
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MarkLWDPage from './MarkLWDPage';
import { markLWD } from '../actions/employeeActions';

const mockStore = configureStore([]);

describe('MarkLWDPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      employees: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ],
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <MarkLWDPage />
      </Provider>
    );
  });

  it('should render the MarkLWDPage component', () => {
    const { getByText, getByLabelText } = component;

    expect(getByText('Mark LWD Page')).toBeInTheDocument();
    expect(getByLabelText('Select Employee')).toBeInTheDocument();
    expect(getByLabelText('Last Working Day Date')).toBeInTheDocument();
    expect(getByText('Mark LWD')).toBeInTheDocument();
  });

  it('should dispatch markLWD action when Mark LWD button is clicked', () => {
    const { getByText, getByLabelText } = component;

    const employeeSelect = getByLabelText('Select Employee');
    const lwdDateInput = getByLabelText('Last Working Day Date');
    const markLWDButton = getByText('Mark LWD');

    fireEvent.change(employeeSelect, { target: { value: '1' } });
    fireEvent.change(lwdDateInput, { target: { value: '2021-12-31' } });
    fireEvent.click(markLWDButton);

    expect(store.dispatch).toHaveBeenCalledWith(markLWD('1', '2021-12-31'));
  });
});
