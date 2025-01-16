import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavigationBar } from './components/NavigationBar';
import './App.css';
import Home from './pages/Home';
import Blinkies from './components/Blinkies.js';

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
        <NavigationBar activeTab={activeTab} handleSelect={handleSelect} />
        {activeTab === "home" && <Home />}
        <Blinkies />
        </div>
    );
}

export default App;
