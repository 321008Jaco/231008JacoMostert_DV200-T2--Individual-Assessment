import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">ConcertBooking</a>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/create">CreateItem</a>
                <a href="/list">ItemList</a>
                <a href="/detail">ItemDetail</a>
                <a href="/edit">EditItem</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
};

export default Navbar;
