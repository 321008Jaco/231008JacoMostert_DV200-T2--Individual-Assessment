const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
    artist: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
    ticketsAvailable: { type: Number, required: true },
    imageUrl: String,
    description: String
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;