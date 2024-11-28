
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ResourceManagementPage from './ResourceManagementPage';
import store from './store';

describe('ResourceManagementPage', () => {
  test('renders resource cards', () => {
    const resources = [
      { id: 1, name: 'Resource 1', description: 'Description 1' },
      { id: 2, name: 'Resource 2', description: 'Description 2' },
      { id: 3, name: 'Resource 3', description: 'Description 3' }
    ];

    const { getByText } = render(
      <Provider store={store}>
        <ResourceManagementPage />
      </Provider>
    );

    resources.forEach(resource => {
      expect(getByText(resource.name)).toBeInTheDocument();
      expect(getByText(resource.description)).toBeInTheDocument();
    });
  });
});
