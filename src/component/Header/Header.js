import React, { useContext } from 'react';
import logo from '../../img/logo.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { MyContext } from '../../App';


const Header = (props) => {
    // const [showArea, setShowArea] = useContext(MyContext);
    return (

        <header style={{
            alignItems: "center",
            // color: `${props.color}`,
            height: '50px',
        }}>
            <Navbar collapseOnSelect expand="lg" className="pt-4" variant="dark">
                <Container className=" navbar-container">
                    <Navbar.Brand href="/"><img src={logo} alt="Travel Guru" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form className="d-flex px-5" >
                            <FormControl
                                type="search"
                                placeholder="Search your destination..."
                                className="px-5"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav className="mx-auto">
                            <Link to="home" className="px-4 navLink">NEWS</Link>
                            <Link to="destination" className="px-4 navLink">DESTINATION</Link>
                            <Link to="blog" className="px-4 navLink">BLOG</Link>
                            <Link to="contact" className="px-4 navLink">CONTACT</Link>
                            <Link to="login" className="px-4 navLink" style={{ background: '#F9A51A', borderRadius: '5px', padding: '2px' }}>LOGIN</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;