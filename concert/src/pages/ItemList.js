// import React, { useContext } from 'react';
// import { TicketsContext } from '../Components/TicketsContext';
// import './ItemList.css';

// const ItemList = () => {
//     const { tickets } = useContext(TicketsContext);

//     return (
//         <div className="item-list">
//             <h2>Tickets for Sale</h2>
//             <div className="tickets-container">
//                 {tickets.length === 0 ? (
//                     <p>No tickets available.</p>
//                 ) : (
//                     tickets.map((ticket, index) => (
//                         <div key={index} className="ticket-card">
//                             <h3>{ticket.concertName}</h3>
//                             <p>Seller: {ticket.sellerName}</p>
//                             <p>Email: {ticket.sellerEmail}</p>
//                             <p>City: {ticket.city}</p>
//                             <p>Price: ${ticket.ticketPrice}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ItemList;
