import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavigationBar } from './NavigationBar';
import './App.css';
import Home from './pages/Home';
import Links from './pages/Links';
import PDFs from './pages/PDFs';

function App() {
    useEffect(() => {
        document.title = "My New Title";
    }, []);

    const [activeTab, setActiveTab] = useState("home");

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    };

    return (
        <div className="App">
        <NavigationBar activeTab={activeTab} handleSelect={handleSelect} />
        {activeTab === "home" && <Home />}
        {activeTab === "links" && <Links />}
        {activeTab === "pdfs" && <PDFs />}
        </div>
    )
}

export default App;
