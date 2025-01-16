import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar';
import './App.css';
import Home from './pages/Home';
import Cinemateca from './pages/Cinemateca';
import Blinkies from './components/Blinkies';

function App() {
    useEffect(() => {
        document.title = "Pek";
    }, []);

    const [activeTab, setActiveTab] = useState("home");

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    };

    return (
        <div className="App">
            <Blinkies />
            <NavigationBar activeTab={activeTab} handleSelect={handleSelect} />
            {activeTab === "home" && <Home handleSelect={handleSelect} />}
            {activeTab === "cinemateca" && <Cinemateca />}
            <Blinkies />
        </div>
    );
}

export default App;
