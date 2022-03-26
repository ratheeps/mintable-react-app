import React from 'react';
import {RaffleSection} from "components";
import SilverCardImage from 'assets/images/mintable-silver-card-nft.svg';
import GoldCardImage from 'assets/images/mintable-gold-card-nft.svg';
import DiamondCardImage from 'assets/images/mintable-diamond-card-nft.svg';

const ticketCards = [
    {
        image: SilverCardImage,
        available_cards: 0
    },
    {
        image: GoldCardImage,
        available_cards: 2
    },
    {
        image: DiamondCardImage,
        available_cards: 3
    }
]

function Home() {
  return (
    <div>
        <RaffleSection ticketCards={ticketCards}/>
    </div>
  );
}

export default Home;
