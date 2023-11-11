import { render, screen } from '@testing-library/react';
import App from './App';

test('does stuff', () => {
  render(<App />);
  const linkElement = screen.getByText(/Version Manager/i);
  expect(linkElement).toBeInTheDocument();
});
