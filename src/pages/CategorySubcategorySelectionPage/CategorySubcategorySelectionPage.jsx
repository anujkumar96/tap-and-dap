
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { selectCategory, selectSubcategory } from './redux/actions';

const CategorySubcategorySelectionPage = () => {
  const categories = useSelector(state => state.categories);
  const subcategories = useSelector(state => state.subcategories);
  const selectedCategory = useSelector(state => state.selectedCategory);
  const selectedSubcategory = useSelector(state => state.selectedSubcategory);
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    dispatch(selectCategory(e.target.value));
  };

  const handleSubcategoryChange = (e) => {
    dispatch(selectSubcategory(e.target.value));
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="categorySelect">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="subcategorySelect">
          <Form.Label>Subcategory</Form.Label>
          <Form.Control as="select" value={selectedSubcategory} onChange={handleSubcategoryChange}>
            {subcategories.map(subcategory => (
              <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CategorySubcategorySelectionPage;
