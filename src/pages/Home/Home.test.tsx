import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Get More Tickets/i);
  expect(linkElement).toBeInTheDocument();
});
