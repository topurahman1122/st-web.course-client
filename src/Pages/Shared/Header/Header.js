import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import LeftSideNav from '../LeftSideNav/LeftSideNav';



const Header = () => {
    return (
        <Navbar className='mb-4' bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to='/'>ST-WEB HOME</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                        <Nav.Link><Link to='/register'>Register</Link></Nav.Link>


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