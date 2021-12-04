import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { useLocation, useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import google from '../../img/Icon/google.png';
import Header from '../Header/Header';
import './Login.css';
import { handleGoogleSignIn, initializeLoginFrameWork, createEmailAndPassword, signInEmailAndPass } from './LoginManager';


const Login = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photoURL: '',
        password: ''
    });

    initializeLoginFrameWork();


    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [newUser, setNewUser] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };


    // Google
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
                // const { displayName, email } = res.newUser;
                // const googleNewUser = { name: displayName, emails: email }
                // setLoggedInUser(googleNewUser);
                // navigate(from, { replace: true });
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

    // Handle Blur
    const handleBlur = (event) => {
        let isFieldValid = true;

        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    };




    // Submit Form
    const handleFormSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                });
        };

        if (!newUser && user.email && user.password) {
            signInEmailAndPass(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                    // console.log(user.name, user.email, user.password);
                });
        };
        e.preventDefault()
    };






    return (
        <div>
            <div className='pb-4' style={{ backgroundColor: 'darkOrange' }}>
                <Header />
            </div>
            <div style={{ width: '500px', height: '700px', margin: 'auto', }}>
                <div >
                    <h2 className="py-1">{newUser ? 'Create an account' : 'Login'}</h2>

                    {/* <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"  />
                    <label htmlFor="newUer">New User Sign Up</label> */}
                    <Form onSubmit={handleFormSubmit}>
                        {newUser &&
                            <Form.Group className="mb-3" >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name='name' type="text" onBlur={handleBlur} placeholder="Enter Your Name" />
                            </Form.Group>
                        }
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" onBlur={handleBlur} placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" onBlur={handleBlur} placeholder="Password" required />
                        </Form.Group>
                        <input type="submit" style={{ backgroundColor: "orange", color: 'white', border: 'none', borderRadius: '5px', padding: '10px 0' }} className="w-100" value={newUser ? 'Sign-Up' : 'Login'} />


                        <p style={{ padding: '5px', textAlign: 'center' }}>
                            {newUser ? 'Already have an account' : 'Don’t have an account'}?
                            <span onClick={() => setNewUser(!newUser)} style={{ cursor: 'pointer', color: 'orange' }}>
                                {newUser ? ' Login' : ' Create an account'}
                            </span>
                        </p>
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