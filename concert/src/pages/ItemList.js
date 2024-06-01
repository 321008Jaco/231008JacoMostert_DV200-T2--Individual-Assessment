import React, { useContext, useEffect } from 'react';
import { TicketsContext } from '../Components/TicketsContext';
import './ItemList.css';

const ItemList = () => {
    const { tickets, deleteTicket, editTicket } = useContext(TicketsContext);

    useEffect(() => {
        console.log("Tickets in ItemList:", tickets);
    }, [tickets]);

    const handleDelete = (id) => {
        deleteTicket(id);
    };

    const handleEdit = (id) => {
        // Placeholder for edit logic
        console.log("Edit ticket:", id);
    };

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
                            <div className="ticket-actions">
                                <button onClick={() => handleEdit(ticket.id)} className="edit-button">Edit</button>
                                <button onClick={() => handleDelete(ticket.id)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ItemList;
