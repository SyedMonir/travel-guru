import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>

            <Navbar>
                <Container>
                    <img src={logo} alt="" />
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
            {/* <nav>
                <Link to='news'>NEWS</Link>
                <Link to='destination'>DESTINATION</Link>
                <Link to='blog'>BLOG</Link>
                <Link to='contact'>CONTACT</Link>
                <Link to='login' className='login'>LOGIN</Link>
            </nav> */}

        </header>
    );
};

export default Header;