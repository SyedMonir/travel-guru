import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { useParams } from 'react-router';
// import { MyContext } from '../../App';
import { hotelsInfo } from '../../fakeData/location';
import Header from '../Header/Header';
import Hotels from '../Hotels/Hotels';
import Map from '../Map/Map';


const Destination = () => {
    // const { desId } = useParams();


    return (
        <div>
            <div className='pb-4' style={{ backgroundColor: 'gray' }}>
                <Header />
            </div>

            <Container xs={12} md={6}
                justify="space-between" style={{ marginTop: "30px" }}>
                <Row>
                    <Col item xs={12} md={7}>
                        <div style={{ marginLeft: "15px" }}>

                            <b style={{ color: "grey" }}>
                                252 Stays Sep 17-20
                            </b>
                            <h3 style={{ margin: 0 }}>
                                Stay in Cox's Bazar
                            </h3>
                        </div>

                        {
                            hotelsInfo.map(hotel => {
                                return (
                                    <Hotels key={hotel.id} hotel={hotel}></Hotels>
                                )
                            })
                        }

                    </Col>

                    <Col item xs={12} md={5}>
                        <Map></Map>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Destination;