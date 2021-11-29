import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from 'react-bootstrap';
import './TravelSection.css';

const TravelSection = () => {
    return (
        <div className='banner_area'>
            <div className="banner_wrapper">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 col-12">
                            <div className='banner_info'>
                                <h1>Cox's bazar</h1>
                                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                                <Link to={`/booking/1`}>
                                    <Button style={{ background: '#F9A51A', borderRadius: '10px', padding: '10px 29px', border: 'none', color: 'black', fontWeight: '500' }}>Booking <FontAwesomeIcon icon={faArrowRight} /> </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-8 col-12 d-flex ">
                            {
                                fakeData.map(place =>
                                    <div className="banner_content">
                                        <div className="row">
                                            <div className='banner_img col-sm-12 col-md-4'>
                                                <Link to={`/booking/${place.id}`}><img src={place.img} alt="" /></Link>
                                                <div className='banner-text'>
                                                    <h2>{place.name}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className=" row align-items-center mt-5" style={{ width: '10px', margin: 'auto', }}>
                        <ButtonGroup size="md" >
                            <Button variant="light"> <FontAwesomeIcon icon={faChevronLeft} /> </Button>
                            <Button variant="light"> <FontAwesomeIcon icon={faChevronRight} /> </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelSection;