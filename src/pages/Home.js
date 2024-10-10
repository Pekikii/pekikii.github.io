import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [showHello, setShowHello] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [showGoodbye, setShowGoodbye] = useState(false);

    useEffect(() => {
        // Show "Hello" after 0.5 seconds
        const helloTimeout = setTimeout(() => setShowHello(true), 500);

        // Show "Thank you for your attention" after 1.5 seconds
        const thankYouTimeout = setTimeout(() => setShowThankYou(true), 1500);

        // Show "Goodbye" after 2.5 seconds
        const goodbyeTimeout = setTimeout(() => setShowGoodbye(true), 2500);

        return () => {
            clearTimeout(helloTimeout);
            clearTimeout(thankYouTimeout);
            clearTimeout(goodbyeTimeout);
        };
    }, []);

    return (
        <div className="home-container">
            {showHello && <p className="fade-in">Hello.</p>}
            {showThankYou && <p className="fade-in">Thank you for your attention.</p>}
            {showGoodbye && <p className="fade-in">Goodbye.</p>}
        </div>
    );
};

export default Home;
