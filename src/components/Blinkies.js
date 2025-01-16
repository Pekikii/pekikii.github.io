import React, { useEffect, useState } from 'react';
import './Blinkies.css';

const blinkies = [
    'https://blinkies.cafe/b/display/0233-mbav3cheersforevil.gif',
    'https://media3.giphy.com/media/02QJb6SE2y6PFw5mCf/200w.webp',
    'https://adriansblinkiecollection.neocities.org/a13.gif',
    'https://adriansblinkiecollection.neocities.org/a84.gif',
    'https://adriansblinkiecollection.neocities.org/h20.gif',
    'https://adriansblinkiecollection.neocities.org/k5.gif',
    'https://adriansblinkiecollection.neocities.org/y39.gif',
    'https://adriansblinkiecollection.neocities.org/25.gif',
    'https://decohoard.carrd.co/assets/images/gallery123/bd508e22.gif?v=e0827b7e',
    'https://blinki.es/blinkies/tech/i-don\'t-do-windows.gif',
    'https://plasticdino.neocities.org/blinkie/D81875-C0-D3-A2-4-D4-F-BD43-008-F9471-FA65.gif',
    'https://plasticdino.neocities.org/blinkie/58c01dc7.gif',
    'https://plasticdino.neocities.org/blinkie/borntodie.gif',
    'https://decohoard.carrd.co/assets/images/gallery110/e2add501.gif?v=e0827b7e',
    'https://decohoard.carrd.co/assets/images/gallery109/13cacbdc.gif?v=e0827b7e',
    'https://media3.giphy.com/media/JxHQYCfyUpmm6jL0UX/giphy.webp',
    'https://adriansblinkiecollection.neocities.org/z2.gif',
    'https://adriansblinkiecollection.neocities.org/z55.gif',
    'https://adriansblinkiecollection.neocities.org/m4.gif',
    'https://adriansblinkiecollection.neocities.org/h7.gif',
    'https://adriansblinkiecollection.neocities.org/v65.gif',
    'https://adriansblinkiecollection.neocities.org/v55.gif',
    'https://adriansblinkiecollection.neocities.org/k6.gif',
    'https://adriansblinkiecollection.neocities.org/z23.gif',
    'https://adriansblinkiecollection.neocities.org/z22.gif',
    'https://adriansblinkiecollection.neocities.org/z47.gif',
    'https://adriansblinkiecollection.neocities.org/15.gif',
    'https://adriansblinkiecollection.neocities.org/b/mousebites.gif',
    'https://adriansblinkiecollection.neocities.org/k1.gif',
];

// Shuffle function
const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const Blinkies = () => {
    const [shuffledTopBlinkies, setShuffledTopBlinkies] = useState([]);
    const [shuffledBottomBlinkies, setShuffledBottomBlinkies] = useState([]);

    useEffect(() => {
        setShuffledTopBlinkies(shuffleArray(blinkies)); // Shuffle for top blinkies
        setShuffledBottomBlinkies(shuffleArray(blinkies)); // Shuffle for bottom blinkies
    }, []);

    return (
        <>
            <div className="blinkies-container-top">
                <div className="blinkies-wrapper">
                    {shuffledTopBlinkies.map((link, index) => (
                        link && (
                            <a key={index} href="https://blinkies.cafe" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={link} 
                                    alt="blinkie" 
                                    className="blinkies-badge"
                                />
                            </a>
                        )
                    ))}
                </div>
            </div>

            <div className="blinkies-container-bottom">
                <div className="blinkies-wrapper">
                    {shuffledBottomBlinkies.map((link, index) => (
                        link && (
                            <a key={`duplicate-${index}`} href="https://blinkies.cafe" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={link} 
                                    alt="blinkie" 
                                    className="blinkies-badge"
                                />
                            </a>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blinkies;
