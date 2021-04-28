import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Location.css';

const Location = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userTokenName = sessionStorage.getItem('userToken');
    return (
        <div>
            <div className="row container mt-4 pb-5 location-area">
                <h4 style={{marginBottom: '35px', textAlign: 'center', marginLeft: '15%', fontSize: '26px', color: '#448faf'}}> Thank You <span style={{color: '#6129ed', fontWeight: '700', fontSize: '29px'}}>       {loggedInUser.displayName || userTokenName}!</span> Your Order is Done.
                    <h6 className="pt-2">We will contact you very soon</h6>
                </h4>

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
                    <div style={{marginLeft: '23%'}}>
                        <button className="btn primary-button">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;