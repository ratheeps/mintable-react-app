import classNames from 'classnames';
import {Props} from "./types"

function TicketCard({image, available_cards}: Props) {
    return (
        <div>
            <div className="flex relative mb-5">
                <div className={classNames(
                    "w-10 h-10 rounded-full text-white",
                    "absolute -right-3 -top-3 flex items-center justify-center bg-indigo-600"
                )}>
                    {available_cards}
                </div>
                <img src={image} alt="Ticket Card" className="inline"/>
            </div>
        </div>
    );
}

export default TicketCard;
