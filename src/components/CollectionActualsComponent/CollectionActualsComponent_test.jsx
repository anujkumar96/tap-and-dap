
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import CollectionActualsComponent from './CollectionActualsComponent';
import { fetchCollectionActuals } from '../actions/collectionActions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../actions/collectionActions', () => ({
  fetchCollectionActuals: jest.fn(),
}));

describe('CollectionActualsComponent', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback({
      collection: {
        actuals: [
          { id: 1, date: '2022-01-01', amount: 100 },
          { id: 2, date: '2022-01-02', amount: 200 },
        ],
      },
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchCollectionActuals.mockClear();
  });

  test('renders Collection Actuals component', () => {
    render(<CollectionActualsComponent />);
    
    expect(screen.getByText('Collection Actuals')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('2022-01-01')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('2022-01-02')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });

  test('dispatches fetchCollectionActuals action on component mount', () => {
    render(<CollectionActualsComponent />);
    
    expect(fetchCollectionActuals).toHaveBeenCalledTimes(1);
  });
});
