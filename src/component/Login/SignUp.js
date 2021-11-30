import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router';
import Header from '../Header/Header';
import { handleGoogleSignIn } from './LoginManager';
import google from '../../img/Icon/google.png';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photoURL: ''
    });
    const [newUser, setNewUser] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    let navigate = useNavigate();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } }

    // Google
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    };

    // Response
    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res)
        if (redirect) {
            Navigate(from, { replace: true });
        }
    };




    return (
        <div>
            <div className='pb-4' style={{ backgroundColor: 'darkOrange' }}>
                <Header />
            </div>
            <div style={{ width: '500px', height: '700px', margin: 'auto', }}>
                <div >
                    <Form>
                        <h3>Create an account</h3>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="" type="submit" style={{ backgroundColor: "orange", color: 'white', width: '100%' }}>
                            Sign Up
                        </Button>

                        <h6 style={{ padding: '5px', textAlign: 'center' }}>Already have an account?
                            <Link to={`/login`}>
                                <span style={{ color: 'orange', cursor: 'pointer' }}>Login.</span>
                            </Link>
                        </h6>
                    </Form>
                </div>
                <br />
                <div className='form_bottom' style={{ width: "400px", margin: "auto" }}>
                    <div className='d-flex justify-content-center'>
                        <hr />
                        <h6>OR</h6>
                        <hr />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            onClick={googleSignIn}
                            variant="outline-dark">
                            <img src={google} alt="google-icon" style={{ float: 'left', marginRight: '20px' }} width='25' height='25' />
                            Continue With Google
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;