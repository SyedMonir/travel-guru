import React from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import fakeData from '../../fakeData/fakeData';
import './Booking.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    const booking = fakeData.find(bk => bk.id === id);
    const { name, details, img2 } = booking;
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url(${img2})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw"
        }}>
            <div className="banner_area">
                <div className="menu_area">
                    <Header color='black'></Header>
                </div>
                <div className="banner_wrapper">
                    <div className='container'>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <div className='banner_info'>
                                    <h1 style={{ fontSize: '60px', fontWeight: '700' }}>{name}</h1>
                                    <p>{details}</p>
                                </div>
                            </div>

                            <div className="col-md-5 offset-1 d-flex ">
                                <div className='booking-input'>
                                    <Form.Group>
                                        <label>Origin</label>
                                        <Form.Control className='bkg_input' type="text" placeholder='Enter your origin' />
                                        <label>Destination</label>
                                        <Form.Control className='bkg_input' type="text" placeholder={name} disabled />
                                        <div className='d-flex justify-content-between'>
                                            <label htmlFor="">Form</label>
                                            <label htmlFor="">To</label>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <input className='bkg_input1' type="date" />
                                            <input className='bkg_input1' type="date" />
                                        </div>
                                        <Link to='/destination'><button className='btn bkg_btn'>Start Booking</button></Link>
                                    </Form.Group>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Booking;