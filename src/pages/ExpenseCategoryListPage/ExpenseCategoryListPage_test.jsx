
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ExpenseCategoryListPage from './ExpenseCategoryListPage';
import store from './store';

describe('ExpenseCategoryListPage', () => {
  it('should render expense categories', () => {
    const expenseCategories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];

    const { getByText } = render(
      <Provider store={store}>
        <ExpenseCategoryListPage />
      </Provider>
    );

    expenseCategories.forEach(category => {
      const categoryElement = getByText(category.name);
      expect(categoryElement).toBeInTheDocument();
    });
  });
});
