import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavigationBar } from './NavigationBar';
import './App.css';
import Home from './pages/Home';

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
        </div>
    )
}

export default App;
