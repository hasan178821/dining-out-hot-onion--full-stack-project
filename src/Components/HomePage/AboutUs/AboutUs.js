import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <div className="row container-fluid p-5">
            <div className="text-center mt-5">
                <h3>Why You Choose Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nemo quia consequuntur, <br/>eligendi nulla beatae, eum sunt, reprehenderit eveniet neque ipsum explicabo ab officia eaque!</p>
            </div>
            <div className="col-md-4 about-part">
                <img src="https://i.ibb.co/VDHbFxw/adult-blur-blurred-background-687824.png" alt=""/>
                <h6>Fast Delivery</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam saepe cumque sed totam quam?</p>
                <a href="/home">See More...</a>
            </div>
            <div className="col-md-4 about-part">
                <img src="https://i.ibb.co/TLr9nmN/chef-cook-food-33614.png" alt=""/>
                <h6>A Good Auto Responder</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod expedita dolorum vitae ad iusto!</p>
                <a href="/home">See More...</a>
            </div>
            <div className="col-md-4 about-part">
                <img src="https://i.ibb.co/Yb9yKZ0/architecture-building-city-2047397.png" alt=""/>
                <h6>Home Delivery</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora illo reiciendis? Nulla, id in.</p>
                <a href="/home">See More...</a>
            </div>
        </div>
    );
};

export default AboutUs;