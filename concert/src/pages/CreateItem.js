import React, { useState, useContext } from 'react';
import { TicketsContext } from '../Components/TicketsContext';
import './CreateItem.css';

const CreateItem = () => {
    const { addTicket } = useContext(TicketsContext);
    const [formData, setFormData] = useState({
        sellerName: '',
        sellerEmail: '',
        concertName: '',
        city: '',
        ticketPrice: '',
        date: '',
        time: '',
        description: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: [...formData.images, URL.createObjectURL(e.target.files[0])],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTicket = { ...formData, id: Math.random().toString(36).substr(2, 9) };
        console.log("New ticket:", newTicket);
        addTicket(newTicket);
        setFormData({
            sellerName: '',
            sellerEmail: '',
            concertName: '',
            city: '',
            ticketPrice: '',
            date: '',
            time: '',
            description: '',
            images: [],
        });
    };

    return (
        <div className="create-item">
            <h2>List Your Ticket for Sale</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sellerName">Seller Name</label>
                    <input
                        type="text"
                        id="sellerName"
                        name="sellerName"
                        value={formData.sellerName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sellerEmail">Seller Email</label>
                    <input
                        type="email"
                        id="sellerEmail"
                        name="sellerEmail"
                        value={formData.sellerEmail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="concertName">Concert Name</label>
                    <input
                        type="text"
                        id="concertName"
                        name="concertName"
                        value={formData.concertName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ticketPrice">Ticket Price</label>
                    <input
                        type="number"
                        id="ticketPrice"
                        name="ticketPrice"
                        value={formData.ticketPrice}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="images">Upload Images</label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="submit-button">List Ticket</button>
            </form>
        </div>
    );
};

export default CreateItem;
