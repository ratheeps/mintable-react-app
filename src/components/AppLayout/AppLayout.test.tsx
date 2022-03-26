import { render, screen } from '@testing-library/react';
import AppLayout from './AppLayout';

test('renders', () => {
  render(<AppLayout />);
  const linkElement = screen.getByText(/Ethereum/i);
  expect(linkElement).toBeInTheDocument();
});
