import React, { useContext } from 'react';
import { MyContext } from '../../App';
import Header from '../Header/Header';
import TravelSection from '../TravelSection/TravelSection';

const Home = () => {
    const [showArea] = useContext(MyContext);
    return (
        <div>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url(${showArea.img})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw"
            }}>

                <Header color="white"></Header>
                <TravelSection></TravelSection>
            </div>
        </div>
    );
}


export default Home;