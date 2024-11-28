
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import DeleteAllocation from './DeleteAllocation';
import { deleteAllocation } from '../actions/allocationActions';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../actions/allocationActions', () => ({
  deleteAllocation: jest.fn(),
}));

describe('DeleteAllocation', () => {
  const allocationId = 1;
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the DeleteAllocation component', () => {
    const { getByText } = render(<DeleteAllocation allocationId={allocationId} />);
    const deleteButton = getByText('Delete Allocation');
    expect(deleteButton).toBeInTheDocument();
  });

  it('should dispatch deleteAllocation action when delete button is clicked', () => {
    const { getByText } = render(<DeleteAllocation allocationId={allocationId} />);
    const deleteButton = getByText('Delete Allocation');
    fireEvent.click(deleteButton);
    expect(dispatch).toHaveBeenCalledWith(deleteAllocation(allocationId));
  });
});
