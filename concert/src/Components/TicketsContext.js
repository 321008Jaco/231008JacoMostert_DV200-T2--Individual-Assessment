import React, { createContext, useState, useEffect } from 'react';

export const TicketsContext = createContext();

export const TicketsProvider = ({ children }) => {
    const [tickets, setTickets] = useState(() => {
        const savedTickets = localStorage.getItem('tickets');
        return savedTickets ? JSON.parse(savedTickets) : [];
    });

    useEffect(() => {
        localStorage.setItem('tickets', JSON.stringify(tickets));
    }, [tickets]);

    const addTicket = (ticket) => {
        setTickets((prevTickets) => {
            const updatedTickets = [...prevTickets, ticket];
            localStorage.setItem('tickets', JSON.stringify(updatedTickets));
            return updatedTickets;
        });
    };

    const deleteTicket = (id) => {
        setTickets((prevTickets) => {
            const updatedTickets = prevTickets.filter(ticket => ticket.id !== id);
            localStorage.setItem('tickets', JSON.stringify(updatedTickets));
            return updatedTickets;
        });
    };

    const editTicket = (id, updatedTicket) => {
        setTickets((prevTickets) => {
            const updatedTickets = prevTickets.map(ticket => 
                ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
            );
            localStorage.setItem('tickets', JSON.stringify(updatedTickets));
            return updatedTickets;
        });
    };

    return (
        <TicketsContext.Provider value={{ tickets, addTicket }}>
            {children}
        </TicketsContext.Provider>
    );
};
