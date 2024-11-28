
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RevenueActualsForm from './RevenueActualsForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('RevenueActualsForm', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('renders form with correct initial values', () => {
    const revenueActual = {
      revenue: 1000,
      date: '2021-01-01',
    };
    const { getByLabelText } = render(
      <RevenueActualsForm revenueActual={revenueActual} isEditing={true} />
    );

    expect(getByLabelText('Revenue')).toHaveValue('1000');
    expect(getByLabelText('Date')).toHaveValue('2021-01-01');
  });

  test('dispatches addRevenueActual action when form is submitted in add mode', () => {
    const { getByLabelText, getByText } = render(
      <RevenueActualsForm revenueActual={{}} isEditing={false} />
    );

    fireEvent.change(getByLabelText('Revenue'), { target: { value: '2000' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2021-02-01' } });
    fireEvent.click(getByText('Add'));

    expect(mockDispatch).toHaveBeenCalledWith(addRevenueActual('2000', '2021-02-01'));
  });

  test('dispatches editRevenueActual action when form is submitted in edit mode', () => {
    const revenueActual = {
      id: 1,
      revenue: 1000,
      date: '2021-01-01',
    };
    const { getByLabelText, getByText } = render(
      <RevenueActualsForm revenueActual={revenueActual} isEditing={true} />
    );

    fireEvent.change(getByLabelText('Revenue'), { target: { value: '2000' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2021-02-01' } });
    fireEvent.click(getByText('Save'));

    expect(mockDispatch).toHaveBeenCalledWith(editRevenueActual(1, '2000', '2021-02-01'));
  });

  test('resets revenue and date inputs after form submission', () => {
    const { getByLabelText, getByText } = render(
      <RevenueActualsForm revenueActual={{}} isEditing={false} />
    );

    fireEvent.change(getByLabelText('Revenue'), { target: { value: '2000' } });
    fireEvent.change(getByLabelText('Date'), { target: { value: '2021-02-01' } });
    fireEvent.click(getByText('Add'));

    expect(getByLabelText('Revenue')).toHaveValue('');
    expect(getByLabelText('Date')).toHaveValue('');
  });
});
