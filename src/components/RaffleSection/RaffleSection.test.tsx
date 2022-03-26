import { render, screen } from '@testing-library/react';
import RaffleSection from './RaffleSection';

test('renders', () => {
  render(<RaffleSection />);
  const linkElement = screen.getByText(/Get More Tickets/i);
  expect(linkElement).toBeInTheDocument();
});
