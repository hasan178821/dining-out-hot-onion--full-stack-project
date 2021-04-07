import React from 'react';
import { Link } from 'react-router-dom';
import './BreakFast.css';

const BreakFast = (props) => {
    // console.log(props.breaks);
    const { name, price, description, _id, imageURL } = props.breaks;
    return (
        <div className="col-md-4 breakfast-card">
            <img src={imageURL} alt=""/>
            <h6>{name}</h6>
            <p>{description}</p>
            <h5>${price}</h5>
            <Link to={`/FoodDetails/${_id}`}>
                <button className="btn primary-button">More...</button>
            </Link>
        </div>
    );
};

export default BreakFast;