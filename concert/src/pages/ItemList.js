import React, { useContext, useEffect } from 'react';
import { TicketsContext } from '../Components/TicketsContext';
import './ItemList.css';

const ItemList = () => {
    const { tickets } = useContext(TicketsContext);

    useEffect(() => {
        console.log("Tickets in ItemList:", tickets);
    }, [tickets]);

    return (
        <div className="item-list">
            <h2>Listed Tickets</h2>
            <div className="tickets-container">
                {tickets.length === 0 ? (
                    <p>No tickets available.</p>
                ) : (
                    tickets.map((ticket) => (
                        <div key={ticket.id} className="ticket-card">
                            <h3>{ticket.concertName}</h3>
                            <p>Seller: {ticket.sellerName}</p>
                            <p>Email: {ticket.sellerEmail}</p>
                            <p>City: {ticket.city}</p>
                            <p>Price: R{ticket.ticketPrice}</p>
                            <p>Date: {ticket.date}</p>
                            <p>Time: {ticket.time}</p>
                            <p>Description: {ticket.description}</p>
                            <div className="ticket-images">
                                {ticket.images.map((image, index) => (
                                    <img key={index} src={image} alt={`Ticket ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ItemList;
