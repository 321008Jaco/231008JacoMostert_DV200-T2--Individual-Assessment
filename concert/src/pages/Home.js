import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Concert Booking Portal</h1>
                    <p>Find and book your favorite concerts easily.</p>
                    <button className="cta-button">Browse Concerts</button>
                </div>
            </section>

            <section className="featured-concerts">
                <h2>Featured Concerts</h2>
                <div className="concerts-list">
                    <div className="concert-card">
                        <img src="#" alt="Concert 1" />
                        <div className="concert-info">
                            <h3>Concert 1</h3>
                            <p>Date: June 15, 2024</p>
                            <p>Location: New York</p>
                        </div>
                    </div>
                    <div className="concert-card">
                        <img src="#" alt="Concert 2" />
                        <div className="concert-info">
                            <h3>Concert 2</h3>
                            <p>Date: July 20, 2024</p>
                            <p>Location: Los Angeles</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="upcoming-events">
                <h2>Upcoming Events</h2>
                <div className="events-list">
                    <div className="event-card">
                        <h3>Event 1</h3>
                        <p>Date: August 5, 2024</p>
                        <p>Location: Chicago</p>
                    </div>
                    <div className="event-card">
                        <h3>Event 2</h3>
                        <p>Date: September 10, 2024</p>
                        <p>Location: San Francisco</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>Step 1</h3>
                        <p>Browse concerts and select your favorite event.</p>
                    </div>
                    <div className="step">
                        <h3>Step 2</h3>
                        <p>Book your tickets easily through our portal.</p>
                    </div>
                    <div className="step">
                        <h3>Step 3</h3>
                        <p>Enjoy the concert with your friends and family.</p>
                    </div>
                </div>
            </section>

            <section className="contact-us">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us at:</p>
                <p>Email: support@concertbooking.com</p>
                <p>Phone: +123 456 7890</p>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Concert Booking Online Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
