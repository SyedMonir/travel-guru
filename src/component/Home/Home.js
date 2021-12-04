import React from 'react';
import Header from '../Header/Header';
import TravelSection from '../TravelSection/TravelSection';

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url("https://media.istockphoto.com/photos/coxs-bazar-in-its-glory-2-picture-id1262671962?k=20&m=1262671962&s=612x612&w=0&h=Vs9i3LQiTmgzLm8E5zURYoZg7Xa7BsogsW6PSESTcNY=")`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw"
            }}>

                <Header></Header>
                <TravelSection></TravelSection>
            </div>
        </div>
    );
}


export default Home;