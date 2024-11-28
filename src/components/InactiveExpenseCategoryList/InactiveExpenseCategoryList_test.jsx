
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import InactiveExpenseCategoryList from './InactiveExpenseCategoryList';

const mockStore = configureStore([]);

describe('InactiveExpenseCategoryList', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      expenseCategories: {
        inactive: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' },
          { id: 3, name: 'Category 3' }
        ],
        active: [
          { id: 4, name: 'Category 4' },
          { id: 5, name: 'Category 5' }
        ]
      }
    });

    component = render(
      <Provider store={store}>
        <InactiveExpenseCategoryList />
      </Provider>
    );
  });

  it('should render the component', () => {
    const { getByText } = component;
    expect(getByText('Inactive Expense Categories')).toBeInTheDocument();
  });

  it('should render the table with correct number of rows', () => {
    const { getAllByRole } = component;
    const rows = getAllByRole('row');
    // Subtract 1 to exclude the table header row
    expect(rows.length - 1).toBe(store.getState().expenseCategories.inactive.length);
  });

  it('should dispatch reactivateExpenseCategory action when Reactivate button is clicked', () => {
    const { getAllByText } = component;
    const reactivateButtons = getAllByText('Reactivate');
    const categoryId = store.getState().expenseCategories.inactive[0].id;

    fireEvent.click(reactivateButtons[0]);

    const actions = store.getActions();
    expect(actions[0].type).toBe('REACTIVATE_EXPENSE_CATEGORY');
    expect(actions[0].payload).toBe(categoryId);
  });
});
