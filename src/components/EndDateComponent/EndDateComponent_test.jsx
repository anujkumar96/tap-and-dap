
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EndDateComponent from './EndDateComponent';

describe('EndDateComponent', () => {
  test('renders without errors', () => {
    render(<EndDateComponent />);
  });

  test('displays the correct label', () => {
    const { getByLabelText } = render(<EndDateComponent />);
    const label = getByLabelText('End Date');
    expect(label).toBeInTheDocument();
  });

  test('calls handleEndDateChange when date is selected', () => {
    const handleEndDateChange = jest.fn();
    const { getByLabelText } = render(
      <EndDateComponent handleEndDateChange={handleEndDateChange} />
    );
    const datePicker = getByLabelText('End Date');
    fireEvent.change(datePicker, { target: { value: '2022-01-01' } });
    expect(handleEndDateChange).toHaveBeenCalled();
  });
});
