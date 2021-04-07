import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <div>
            <div className="row container mt-5 pb-5 location-area">
                <div className="col-md-7 container map">
                    <img src="https://i.ibb.co/GsZPcJT/mapImage.jpg" alt=""/>
                </div>

                <div className="col-md-5 location-info">
                <img src="https://i.ibb.co/gPLSsDH/Group-1151.png" alt=""/>
                    <div className="location-txt">
                        <h6>Your Location</h6>
                        <p>107 RD No 8</p>

                        <h6>Shop Address</h6>
                        <p>Sanmar Ocen City, GEC Mor</p>
                    </div>

                    <div className="estimate-time">
                        <h3>9:30</h3>
                        <p>Estimated delivery time</p>
                    </div>

                    <div className="location-txt">
                        <h6>Ahmed Hossain</h6>
                        <p>Your Rider</p>
                    </div>
                    <button className="btn primary-button">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Location;