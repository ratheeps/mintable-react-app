import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button children="I'm RaffleSection" />);
  const linkElement = screen.getByText(/I'm RaffleSection/i);
  expect(linkElement).toBeInTheDocument();
});
