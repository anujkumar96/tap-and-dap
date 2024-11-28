
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SelectComponent from './SelectComponent';

const mockStore = configureStore([]);

describe('SelectComponent', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      // mock initial state here if needed
    });

    component = render(
      <Provider store={store}>
        <SelectComponent
          label="Test Label"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          value="option1"
          onChange={() => {}}
        />
      </Provider>
    );
  });

  it('should render the component with the correct label', () => {
    const { getByText } = component;
    expect(getByText('Test Label')).toBeInTheDocument();
  });

  it('should render the component with the correct options', () => {
    const { getByLabelText } = component;
    const selectElement = getByLabelText('Test Label');
    expect(selectElement).toHaveTextContent('Option 1');
    expect(selectElement).toHaveTextContent('Option 2');
    expect(selectElement).toHaveTextContent('Option 3');
  });

  it('should call the onChange function when an option is selected', () => {
    const onChangeMock = jest.fn();
    component.rerender(
      <Provider store={store}>
        <SelectComponent
          label="Test Label"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          value="option1"
          onChange={onChangeMock}
        />
      </Provider>
    );

    const { getByLabelText } = component;
    const selectElement = getByLabelText('Test Label');
    fireEvent.change(selectElement, { target: { value: 'option2' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('option2');
  });
});
