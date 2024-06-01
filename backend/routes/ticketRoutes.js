// const express = require('express');
// const Ticket = require('../models/Ticket');
// const router = express.Router();

// // Create a new ticket
// router.post('/tickets', async (req, res) => {
//     try {
//         const newTicket = new Ticket(req.body);
//         await newTicket.save();
//         res.status(201).json(newTicket);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Get all tickets
// router.get('/tickets', async (req, res) => {
//     try {
//         const tickets = await Ticket.find();
//         res.status(200).json(tickets);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// module.exports = router;
