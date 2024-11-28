
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseCategoryList from './ExpenseCategoryList';

const mockStore = configureStore([]);

describe('ExpenseCategoryList', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      categories: [
        { id: 1, name: 'Category 1', active: true },
        { id: 2, name: 'Category 2', active: false },
        { id: 3, name: 'Category 3', active: true },
      ],
    });

    component = render(
      <Provider store={store}>
        <ExpenseCategoryList />
      </Provider>
    );
  });

  it('should render the category list correctly', () => {
    const { getByText } = component;

    expect(getByText('Category 1')).toBeInTheDocument();
    expect(getByText('Category 2')).toBeInTheDocument();
    expect(getByText('Category 3')).toBeInTheDocument();
  });

  it('should render the active category with green color', () => {
    const { getByText } = component;

    expect(getByText('Category 1')).toHaveClass('active');
    expect(getByText('Category 3')).toHaveClass('active');
  });

  it('should render the inactive category with red color', () => {
    const { getByText } = component;

    expect(getByText('Category 2')).toHaveClass('inactive');
  });

  it('should dispatch setActiveCategory action when deactivate button is clicked', () => {
    const { getByText } = component;

    fireEvent.click(getByText('Deactivate'));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'SET_ACTIVE_CATEGORY', payload: 1 });
  });

  it('should dispatch reactivateCategory action when reactivate button is clicked', () => {
    const { getByText } = component;

    fireEvent.click(getByText('Reactivate'));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'REACTIVATE_CATEGORY', payload: 2 });
  });
});
