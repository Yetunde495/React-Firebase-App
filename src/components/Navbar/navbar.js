import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import './navbar.css'

function Homenav() {
  
  

  return (
    <div>
      <section className="navbar-section">
        <Navbar expand="md" fixed="top">
          <Container>
           
              <Navbar.Brand className="navbar-brand">
                <img
                 src={logo}
                 style={{width: 40, height: 40}}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="/"
                  className="nav-link"
                  style={{ fontWeight: "700" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  About Us
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                 Events
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  Trainings
                </Nav.Link>
                <Nav.Link href="#link" className="nav-link">
                  FAQs
                </Nav.Link>
              </Nav>
              
            <Nav className="ms-auto">
                
                <Button variant="dark" className="d-btn">Donate</Button>
              </Nav> 
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </div>
  );
}

export default Homenav;