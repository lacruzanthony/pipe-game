import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store'
import React from 'react';
import { Provider } from 'react-redux'

test('renders learn react link', () => {
  render(<Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>);
  const linkElement = screen.getByText(/Loading board/i);
  expect(linkElement).toBeInTheDocument();
});
