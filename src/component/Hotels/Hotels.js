import React from 'react';


const Hotels = (props) => {
    const { title, star, reviewed, bedroom, bed, bath, img, guest, price } = props.hotel;

    return (
        <div style={{
            display: "flex",
            padding: "10px",
            alignItems: "center"
        }}>
            <div>
                <img style={{ width: "250px" }} src={img} alt="" />
            </div>
            <div className="hotel-text-container" style={{ marginLeft: "10px" }}>
                <h4 style={{ margin: "0" }}>
                    {title}
                </h4>

                <div className="hotel-features">
                    <span>
                        {guest} guests
                    </span>
                    <span>
                        {bedroom} bedrooms
                    </span>
                    <span>
                        {bed} beds
                    </span>
                    <span>
                        {bath} baths
                    </span>
                </div>
                <p>Wif air conditioning kitchen</p>
                <p>Cancellation flexibility available</p>

                <div className="hotel-review" style={{
                    display: "flex", alignItems: "center"
                }}>

                    <span>
                        {star} ({reviewed})
                    </span>
                    <span>
                        ${price}/
                        <span className="custom-color">
                            Night
                        </span>
                    </span>
                    <span className="custom-color">
                        167 total
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Hotels;