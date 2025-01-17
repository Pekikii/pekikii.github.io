import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = ({ handleSelect }) => {
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fadeInMessages = [
        "Hello.",
        "Thank you for your attention.",
        "Goodbye."
    ];


    useEffect(() => {
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

    return (
        <div className="home-container">
            {messages.map((message, index) => (
                <div key={index} className={`fade-in`}>
                    {message}
                </div>
            ))}
            <div className="image-button-container" onClick={goToCinemateca}>
                <img 
                    src="/images.png" 
                    alt="Go to Cinemateca" 
                    className="image-button"
                />
            </div>
        </div>
    );
};

export default Home;
