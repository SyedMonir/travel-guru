import React from 'react';
import { Link } from 'react-router-dom';
// import Header from "./component/Header/Header";
import NotFoundImg from '../../img/notfound.jpg'

const NotFound = () => {
    const notfoundStyle = {
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${NotFoundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div style={notfoundStyle}>
            <Link to='/'>
                <button style={{
                    background: "#e0e014",
                    color: "182653",
                    border: 'none',
                    borderRadius: '10px',
                    padding: "10px 50px",
                    position: "fixed",
                    bottom: "35px",
                    left: '43%',
                }}>
                    Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;