import React, { useEffect, useState } from 'react';
import BreakFast from '../BreakFast/BreakFast';
import './Card.css';

const Card = () => {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getBreakfastInfo')
        .then(res => res.json())
        .then(data => {
            setBreakfast(data);
            console.log(data);
        })
    }, [])
    return (
        <div className="">
            <nav>
                <div className="nav nav-tabs tab-title justify-content-center tab-button" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        <h5>BreakFast</h5>
                    </button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <h5>Lunch</h5>
                    </button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                        <h5>Dinner</h5>
                    </button>
                </div>
            </nav>
            <div className="tab-content mt-4 text-center" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    
                    <div className="row">
                        {
                            breakfast.map(breaks => <BreakFast breaks={breaks} key={breaks._id}></BreakFast>)
                        }
                    </div>

                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">this is lunch</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">this dinner</div> 
            </div>
        </div>
    );
};

export default Card;