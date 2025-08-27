import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar({ activeTab, handleSelect }) {
    const onLogoClick = (e) => {
        e.preventDefault();
        handleSelect('home');
    };

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand className="ms-3" href="#home" onClick={onLogoClick}>
                <img 
                    src="/logo.png"
                    alt="Logo" 
                    height="40"
                    className="spinning-logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={activeTab} onSelect={handleSelect}>
                    <Nav.Link eventKey="home">Home</Nav.Link>
                    <Nav.Link eventKey="cinemateca">Cinemateca</Nav.Link>
                    <Nav.Link eventKey="artikdle">Artikdle</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export { NavigationBar };

