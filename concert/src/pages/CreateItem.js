import React, { useState } from 'react';
import './CreateItem.css';

const CreateItem = () => {
    const [formData, setFormData] = useState({
        sellerName: '',
        sellerEmail: '',
        concertName: '',
        city: '',
        ticketPrice: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data submitted:', formData);
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
                <button type="submit" className="submit-button">List Ticket</button>
            </form>
        </div>
    );
};

export default CreateItem;

