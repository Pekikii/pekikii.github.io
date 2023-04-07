import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar({ activeTab, handleSelect }) {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home">Pek</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={activeTab} onSelect={handleSelect}>
          <Nav.Link eventKey="home">Home</Nav.Link>
          <Nav.Link eventKey="pdfs">PDFs</Nav.Link>
          <Nav.Link eventKey="links">Links</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export { NavigationBar };
