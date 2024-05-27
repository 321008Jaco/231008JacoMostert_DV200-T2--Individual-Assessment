const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    concert: { type: mongoose.Schema.Types.ObjectId, ref: 'Concert', required: true },
    user: { type: String, required: true },  // This could be a reference to a User model if you have one
    ticketsBooked: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
