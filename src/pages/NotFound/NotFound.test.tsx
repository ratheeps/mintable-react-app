import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('renders', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Not Found Page/i);
  expect(linkElement).toBeInTheDocument();
});
