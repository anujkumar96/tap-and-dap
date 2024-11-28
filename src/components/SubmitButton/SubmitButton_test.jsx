
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('SubmitButton', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(<SubmitButton />);
    const button = getByText('Submit');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick function when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<SubmitButton onClick={onClickMock} />);
    const button = getByText('Submit');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
