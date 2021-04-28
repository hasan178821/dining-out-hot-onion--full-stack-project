import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <Card></Card>
                <AboutUs></AboutUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;