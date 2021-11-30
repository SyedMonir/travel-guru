import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { useLocation, useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import google from '../../img/Icon/google.png';
import Header from '../Header/Header';
import './Login.css';
import { handleGoogleSignIn, handleSignOut } from './LoginManager';
import { Link } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photoURL: ''
    });
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    let navigate = useNavigate();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

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
            navigate(from, { replace: true });
        }
    };

    // Sign Out
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false)
            })
    };


    return (
        <div>
            <div className='pb-4' style={{ backgroundColor: 'darkOrange' }}>
                <Header />
            </div>
            <div style={{ width: '500px', height: '700px', margin: 'auto', }}>
                <div >
                    <Form>

                        <h3>Login</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="" type="submit" style={{ backgroundColor: "orange", color: 'white', width: '100%' }}>
                            Login
                        </Button>

                        <h6 style={{ padding: '5px', textAlign: 'center' }}>Don’t have an account?
                            <Link to={`/signup`}>
                                <span style={{ color: 'orange', cursor: 'pointer' }}>Create an account.</span>
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

        </div >
    );
};

export default Login;