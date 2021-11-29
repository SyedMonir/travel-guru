import React, { useContext, useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import firebaseConfig from './firebaseConfig';
import { MyContext } from '../../App';
import { useLocation, useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import google from '../../img/Icon/google.png';
import Header from '../Header/Header';
import './Login.css';
import { handleGoogleSignIn } from './LoginManager';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// const app = initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    let navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    };

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res)
        if (redirect) {
            navigate(from, { replace: true });
        }
    };


    return (
        <div>
            <div className='pb-4' style={{ backgroundColor: 'gray' }}>
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

                        <h6 style={{ padding: '5px', textAlign: 'center' }}>Don’t have an account? <span style={{ color: 'orange', cursor: 'pointer' }}>Create an account.</span> </h6>

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