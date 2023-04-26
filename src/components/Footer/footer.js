import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../../assets/images/logo192.png";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const FooterLink =(props) => {
  return (
    <li className="nav-item mb-1">
    <a href="#" class="nav-link p-0 text-muted">
      {props.text}
    </a>
  </li> 
  )
}

export const Footer = () => {
  const teamLinks = [
    'About Us',
    'Our Team',
    'What we do',
    'FAQs',
    'Contact'
  ]

  const moreLinks = [
    'Project',
    'Events',
    'Trainings',
    'Donate',
    'Blog'
  ]
  return (
    <div style={{ backgroundColor: "#0b0706", color: "#fff" }}>
      <Container>
        <footer style={{ padding: "3rem 0 2% 0" }}>
          <div className="row">
            <div className="col-md-2 col-12 mb-1">
              <img src={logo} style={{ width: 50, height: 50 }} />
            </div>
            <div className="col-6 col-md-2 mb-1" style={{ textAlign: "left" }}>
              <h6 className="mb-2">Our Team</h6>
              <ul className="nav flex-column">
              {teamLinks.map((val, index) => (
                <FooterLink text={val} key={index}/>
              ))}
                {/* <li className="nav-item mb-1">
                  <a href="#" class="nav-link p-0 text-muted">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    Our Team
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    What we do
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    Contact
                  </a>
                </li> */}
              </ul> 
            </div>

            <div className="col-6 col-md-2 mb-1" style={{ textAlign: "left" }}>
              <h6 className="mb-2">More</h6>
              <ul className="nav flex-column">
              {moreLinks.map((val, index) => (
                <FooterLink text={val} key={index}/>
              ))}
                {/* <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    Project
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    Event
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    Trainings
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    Donate
                  </a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-muted">
                    Blog
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-1">
              <Form>
                <h5 className="mb-2" style={{ textAlign: "left" }}>
                  Subscribe to get latest updates
                </h5>
                <InputGroup className="mb-2">
                  <Form.Control placeholder="Recipient's username" />
                  <Button variant="secondary" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2"></div>
              </Form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="" href="#">
                  <Twitter />
                </a>
              </li>
              <li className="ms-3">
                <a className="" href="#">
                  <Instagram />
                </a>
              </li>
              <li className="ms-3">
                <a className="" href="#">
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </div>
  );
};
