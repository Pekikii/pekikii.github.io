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
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    const goToGoogle = () => {
        window.location.href = "https://www.google.com";
    };

    const goToCinemateca = () => {
        handleSelect("cinemateca");
    };

    const goToArtikdle = () => {
        handleSelect("artikdle");
    };

    return (
        <div className="home-container">
            {messages.map((message, index) => (
                <div key={index} className="fade-in">
                    {message === "Goodbye." ? (
                        <button onClick={goToGoogle} className="goodbye-button">
                            Goodbye.
                        </button>
                    ) : (
                        message
                    )}
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
