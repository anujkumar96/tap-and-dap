
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ExpenseSubcategoryPage from './ExpenseSubcategoryPage';
import { activateSubcategory, inactivateSubcategory } from './actions';

const mockStore = configureStore([]);

describe('ExpenseSubcategoryPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      subcategories: [
        { id: 1, name: 'Subcategory 1', description: 'Description 1', isActive: true },
        { id: 2, name: 'Subcategory 2', description: 'Description 2', isActive: false },
        { id: 3, name: 'Subcategory 3', description: 'Description 3', isActive: true },
      ],
    });

    component = render(
      <Provider store={store}>
        <ExpenseSubcategoryPage subcategory={store.getState().subcategories[0]} isActive={true} />
      </Provider>
    );
  });

  it('should render subcategory name and description', () => {
    const { getByText } = component;
    const subcategory = store.getState().subcategories[0];

    expect(getByText(subcategory.name)).toBeInTheDocument();
    expect(getByText(subcategory.description)).toBeInTheDocument();
  });

  it('should render activate button when isActive is false', () => {
    store.clearActions();
    component.rerender(
      <Provider store={store}>
        <ExpenseSubcategoryPage subcategory={store.getState().subcategories[1]} isActive={false} />
      </Provider>
    );

    const { getByText } = component;
    const activateButton = getByText('Activate');

    expect(activateButton).toBeInTheDocument();
  });

  it('should render inactivate button when isActive is true', () => {
    store.clearActions();
    component.rerender(
      <Provider store={store}>
        <ExpenseSubcategoryPage subcategory={store.getState().subcategories[2]} isActive={true} />
      </Provider>
    );

    const { getByText } = component;
    const inactivateButton = getByText('Inactivate');

    expect(inactivateButton).toBeInTheDocument();
  });

  it('should dispatch activateSubcategory action when activate button is clicked', () => {
    const { getByText } = component;
    const activateButton = getByText('Activate');

    fireEvent.click(activateButton);

    expect(store.getActions()).toEqual([activateSubcategory(1)]);
  });

  it('should dispatch inactivateSubcategory action when inactivate button is clicked', () => {
    const { getByText } = component;
    const inactivateButton = getByText('Inactivate');

    fireEvent.click(inactivateButton);

    expect(store.getActions()).toEqual([inactivateSubcategory(1)]);
  });
});
