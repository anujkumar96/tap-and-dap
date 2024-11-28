
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import NotificationsPage from './NotificationsPage';
import store from './store';

describe('NotificationsPage', () => {
  test('renders notifications correctly', () => {
    const notifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];

    render(
      <Provider store={store}>
        <NotificationsPage />
      </Provider>
    );

    notifications.forEach(notification => {
      expect(screen.getByText(notification.message)).toBeInTheDocument();
    });
  });
});
