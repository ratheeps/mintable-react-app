import { render, screen } from '@testing-library/react';
import AppLayout from './AppLayout';

test('renders', () => {
  render(<AppLayout />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});
