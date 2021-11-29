import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { MyContext } from '../../App';
import { useLocation, useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import google from '../../img/Icon/google.png';
import Header from '../Header/Header';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const app = initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [user, setUser] = useState(false)
    let navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                console.log(result);
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };


    return (
        <div>
            <div className='pb-4' style={{ backgroundColor: 'gray' }}>
                <Header />
            </div>
            <div style={{ width: '500px', height: '700px', margin: 'auto', }}>
                <div >
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ alignItems: 'center' }}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <br />
                <div className=' form_bottom'>
                    <div className='d-flex justify-content-center'>
                        <span></span>
                        <h6>OR</h6>
                        <span></span>
                    </div>
                    <div>
                        <Button
                            onClick={handleGoogleSignIn}
                            className='d-flex'
                            variant="outline-dark"
                            style={{ padding: '10 20px' }}>
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