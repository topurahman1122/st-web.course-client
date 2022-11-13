import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';



const Header = () => {
    return (
        <Navbar className='mb-4' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ST-WEBCOURSE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Courses</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Others
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Signup
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;