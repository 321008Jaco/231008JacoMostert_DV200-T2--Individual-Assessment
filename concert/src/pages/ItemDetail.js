import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFeaturedConcerts } from '../Sources/MockAPI';
import './ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTicket = async () => {
            setLoading(true);
            const concerts = await fetchFeaturedConcerts();
            const concert = concerts.find((concert) => concert.id === id);
            setTicket(concert);
            setLoading(false);
        };

        fetchTicket();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!ticket) {
        return <div>Ticket not found</div>;
    }

    return (
        <div className="item-detail">
            <h2>{ticket.concertName}</h2>
            <div className="ticket-info">
                <p><strong>Date:</strong> {ticket.date}</p>
                <p><strong>Time:</strong> {ticket.time}</p>
                <p><strong>Place:</strong> {ticket.city}</p>
                <p><strong>Ticket Price:</strong> R{ticket.ticketPrice}</p>
                <p><strong>Description:</strong> {ticket.description}</p>
            </div>
            <div className="ticket-images">
                {ticket.images.map((image, index) => (
                    <img key={index} src={image} alt={`Concert ${index + 1}`} />
                ))}
            </div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ItemDetail;
