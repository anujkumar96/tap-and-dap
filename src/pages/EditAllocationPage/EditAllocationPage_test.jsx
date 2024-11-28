
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import EditAllocationPage from './EditAllocationPage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('EditAllocationPage', () => {
  const allocation = {
    id: 1,
    hours: 10,
    comments: 'Test comments',
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  test('renders Edit Allocation page', () => {
    const { getByText, getByLabelText } = render(
      <EditAllocationPage allocation={allocation} />
    );

    expect(getByText('Edit Allocation')).toBeInTheDocument();
    expect(getByLabelText('Hours')).toBeInTheDocument();
    expect(getByLabelText('Comments')).toBeInTheDocument();
    expect(getByText('Save')).toBeInTheDocument();
  });

  test('updates hours when input value changes', () => {
    const { getByLabelText } = render(
      <EditAllocationPage allocation={allocation} />
    );

    const hoursInput = getByLabelText('Hours');
    fireEvent.change(hoursInput, { target: { value: '20' } });

    expect(hoursInput.value).toBe('20');
  });

  test('updates comments when textarea value changes', () => {
    const { getByLabelText } = render(
      <EditAllocationPage allocation={allocation} />
    );

    const commentsTextarea = getByLabelText('Comments');
    fireEvent.change(commentsTextarea, { target: { value: 'Updated comments' } });

    expect(commentsTextarea.value).toBe('Updated comments');
  });

  test('dispatches updateAllocation action when form is submitted', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(
      <EditAllocationPage allocation={allocation} />
    );

    const saveButton = getByText('Save');
    fireEvent.click(saveButton);

    expect(dispatch).toHaveBeenCalledWith(
      updateAllocation(allocation.id, allocation.hours, allocation.comments)
    );
  });
});
