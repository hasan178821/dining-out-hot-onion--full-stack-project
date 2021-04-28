import React from 'react';
import { Link } from 'react-router-dom';
import './LunchCard.css';

const LunchCard = (props) => {
    const { name, description, price, imageURL, _id } = props.singleLunch; 
    return (
        <div className="col-md-4 lunch-card">
            <img src={imageURL} alt=""/>
            <h6>{name}</h6>
            <p>{description}</p>
            <h5>{price}</h5>
            <Link to={`/FoodDetails/${_id}`}>
                <button className="btn primary-button">More...</button>
            </Link>
        </div>
    );
};

export default LunchCard;