
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import DeleteAllocationButton from './DeleteAllocationButton';
import { deleteAllocation } from '../actions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock('../actions', () => ({
  deleteAllocation: jest.fn()
}));

describe('DeleteAllocationButton', () => {
  const allocationId = 1;
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    render(<DeleteAllocationButton allocationId={allocationId} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the button with the correct variant', () => {
    const { getByText } = render(<DeleteAllocationButton allocationId={allocationId} />);
    const button = getByText('Delete Allocation');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-danger');
  });

  it('should dispatch the deleteAllocation action when the button is clicked', () => {
    const { getByText } = render(<DeleteAllocationButton allocationId={allocationId} />);
    const button = getByText('Delete Allocation');
    fireEvent.click(button);
    expect(dispatch).toHaveBeenCalledWith(deleteAllocation(allocationId));
  });
});
