import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchFeaturedConcerts } from '../Sources/MockAPI';
import './Home.css';

const Home = () => {
    const [featuredConcerts, setFeaturedConcerts] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConcerts = async () => {
            setLoading(true);
            const concerts = await fetchFeaturedConcerts();
            setFeaturedConcerts(concerts);

            const mayAndJuneEvents = concerts.filter(concert => {
                const concertDate = new Date(concert.date);
                const month = concertDate.getMonth();
                return month === 4 || month === 5;
            });

            setUpcomingEvents(mayAndJuneEvents);
            setLoading(false);
        };

        fetchConcerts();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredConcerts = featuredConcerts.filter(concert =>
        concert.concertName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <section className="hero">
                    <img src="https://static.euronews.com/articles/stories/06/86/00/24/1440x810_cmsv2_e7deea0f-eb56-54d3-94c5-af69b8e5f5dc-6860024.jpg" alt="Concert Booking" className="hero-image" />               
                <div className="hero-content">
                    <h1>Welcome to Concert Booking Portal</h1>
                    <p>Find and book your favorite concerts easily.</p>
                    <button className="cta-button">Browse Concerts</button>
                </div>
            </section>

            <section className="search-bar">
                <input
                    type="text"
                    placeholder="Search concerts..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </section>

            <section className="featured-concerts">
                <h2>Featured Concerts</h2>
                <div className="concerts-list">
                    {filteredConcerts.length === 0 ? (
                        <p>No concerts available.</p>
                    ) : (
                        filteredConcerts.map((concert) => (
                            <Link to={`/detail/${concert.id}`} key={concert.id} className="concert-link">
                                <div className="concert-card">
                                    <img src={concert.images[0]} alt={concert.concertName} />
                                    <div className="concert-info">
                                        <h3>{concert.concertName}</h3>
                                        <p><strong>Date:</strong> {concert.date}</p>
                                        <p><strong>Time:</strong> {concert.time}</p>
                                        <p><strong>City:</strong> {concert.city}</p>
                                        <p><strong>Price:</strong> R{concert.ticketPrice}</p>
                                        <p>{concert.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </section>

            <section className="upcoming-events">
                <h2>Upcoming Events in May and June</h2>
                <div className="events-list">
                    {upcomingEvents.length === 0 ? (
                        <p>No events available in May and June.</p>
                    ) : (
                        upcomingEvents.map((event) => (
                            <Link to={`/detail/${event.id}`} key={event.id} className="event-link">
                                <div className="event-card">
                                    <h3>{event.concertName}</h3>
                                    <p><strong>Date:</strong> {event.date}</p>
                                    <p><strong>Location:</strong> {event.city}</p>
                                    <p><strong>Price:</strong> R{event.ticketPrice}</p>
                                </div>
                            </Link>
                        ))
                    )}
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