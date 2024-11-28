
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CategorySubcategorySelectionPage from './CategorySubcategorySelectionPage';
import { selectCategory, selectSubcategory } from './redux/actions';

const mockStore = configureStore([]);

describe('CategorySubcategorySelectionPage', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      categories: [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
      ],
      subcategories: [
        { id: 1, name: 'Subcategory 1' },
        { id: 2, name: 'Subcategory 2' },
      ],
      selectedCategory: '',
      selectedSubcategory: '',
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <CategorySubcategorySelectionPage />
      </Provider>
    );
  });

  it('should render category and subcategory select inputs', () => {
    const { getByLabelText } = component;

    expect(getByLabelText('Category')).toBeInTheDocument();
    expect(getByLabelText('Subcategory')).toBeInTheDocument();
  });

  it('should dispatch selectCategory action on category select change', () => {
    const { getByLabelText } = component;

    fireEvent.change(getByLabelText('Category'), { target: { value: '1' } });

    expect(store.dispatch).toHaveBeenCalledWith(selectCategory('1'));
  });

  it('should dispatch selectSubcategory action on subcategory select change', () => {
    const { getByLabelText } = component;

    fireEvent.change(getByLabelText('Subcategory'), { target: { value: '2' } });

    expect(store.dispatch).toHaveBeenCalledWith(selectSubcategory('2'));
  });

  it('should render submit button', () => {
    const { getByText } = component;

    expect(getByText('Submit')).toBeInTheDocument();
  });
});
