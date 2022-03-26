import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});
