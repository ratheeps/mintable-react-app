import { render, screen } from '@testing-library/react';
import RaffleSection from './RaffleSection';

test('renders', () => {
  const ticketCards = [
    {
      image: "assets/images/mintable-silver-card-nft.svg",
      available_cards: 3
    },
    {
      image: "assets/images/mintable-gold-card-nft.svg",
      available_cards: 3
    },
    {
      image: "assets/images/mintable-diamond-card-nft.svg",
      available_cards: 3
    }
  ]

  render(<RaffleSection ticketCards={ticketCards}/>);
  const linkElement = screen.getByText(/Get More Tickets/i);
  expect(linkElement).toBeInTheDocument();
});
