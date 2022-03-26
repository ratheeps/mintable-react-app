import { Button } from 'components';
import {Props} from "./types";
import {TicketCard} from "components";

function RaffleSection({ticketCards}: Props) {
  return (
      <div className="bg-gray-50 flex flex-1 flex-col lg:flex-row lg:p-8 p-2 sm:p-4">
          <div className="bg-white shadow rounded w-full lg:w-1/6">
              <div className="flex justify-between lg:p-4 p-1 sm:p-2 border-b items-center">
                  <h2 className="font-semibold text-xl">Get More Tickets</h2>
                  <div className="ml-3">
                      <Button children="Buy"/>
                  </div>
              </div>
              <div className="p-3 lg:p-10 flex flex-row lg:flex-col items-center">
                  {ticketCards.map((item, key) => (
                      <TicketCard key={key} image={item.image} available_cards={item.available_cards}/>
                  ))}
              </div>
          </div>
          <div className="p-3 flex-1 flex flex-col lg:ml-3 bg-white shadow rounded">
                Right
          </div>
      </div>
  );
}

export default RaffleSection;
