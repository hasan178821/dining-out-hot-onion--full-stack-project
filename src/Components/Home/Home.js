import React from 'react';
import Card from '../Card/Card';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;