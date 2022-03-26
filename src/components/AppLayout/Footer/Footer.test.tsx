import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Footer/i);
  expect(linkElement).toBeInTheDocument();
});
