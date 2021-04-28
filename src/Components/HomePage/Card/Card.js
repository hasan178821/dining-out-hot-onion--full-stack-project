import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Card.css';

const Card = () => {
    
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
                    
                    <Breakfast></Breakfast>

                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    
                    <Lunch></Lunch>

                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    <Dinner></Dinner>
                
                </div> 
            </div>
            
            <div className="text-center py-5">
                <button className="btn primary-button">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Card;