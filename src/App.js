import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar';
import './App.css';
import Home from './pages/Home';
import Cinemateca from './pages/Cinemateca';
import ArtikdleGame from './pages/ArtikdleGame';
import Blinkies from './components/Blinkies';

function App() {
    useEffect(() => {
        document.title = "Pek";
    }, []);

    // Initialize activeTab from localStorage or default to "home"
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeTab') || "home";
    });

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
        localStorage.setItem('activeTab', eventKey); // save to localStorage
    };

    return (
        <div className="App">
            <Blinkies />
            <NavigationBar activeTab={activeTab} handleSelect={handleSelect} />
            {activeTab === "home" && <Home handleSelect={handleSelect} />}
            {activeTab === "cinemateca" && <Cinemateca />}
            {activeTab === "artikdle" && <ArtikdleGame />}
            <Blinkies />
        </div>
    );
}

export default App;

