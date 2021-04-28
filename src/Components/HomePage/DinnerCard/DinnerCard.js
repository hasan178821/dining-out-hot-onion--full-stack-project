import React from 'react';
import { Link } from 'react-router-dom';
import './DinnerCard.css';

const DinnerCard = (props) => {
    const { name, description, price, _id, imageURL} = props.singleDinner;
    return (
        <div className="col-md-4 dinner-card">
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

export default DinnerCard;