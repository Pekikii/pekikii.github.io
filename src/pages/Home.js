import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = ({ handleSelect }) => {
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fadeInMessages = [
            "Hello.",
            "Thank you for your attention.",
            "Goodbye."
        ];
        if (currentIndex < fadeInMessages.length) {

            const timer = setTimeout(() => {
                setMessages((prev) => [...prev, fadeInMessages[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, 2000); // Show each message for 2 seconds (adjust as needed)

            return () => clearTimeout(timer);
        } else {
            // Redirect to Google after the last message
            const redirectTimer = setTimeout(() => {
                window.location.href = "https://www.google.com";
            }, 2000); // Adjust the delay to match the last message display time

            return () => clearTimeout(redirectTimer);
        }
    }, [currentIndex]);

    const goToCinemateca = () => {
        handleSelect("cinemateca");
    };
    const goToArtikdle = () => {
        handleSelect("artikdle");
    };

    return (
        <div className="home-container">
            {messages.map((message, index) => (
                <div key={index} className={`fade-in`}>
                    {message}
                </div>
            ))}
            <div className="image-button-container" onClick={goToArtikdle}>
                <img 
                    src="/dancing-skeleton-on-fire.gif" 
                    alt="Go to Artikdle" 
                    className="image-button"
                />
            </div>
        </div>
    );
};

export default Home;
