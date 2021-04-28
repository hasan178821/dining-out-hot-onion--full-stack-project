import React, { useEffect, useState } from 'react';
import './FoodDetails.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const FoodDetails = () => {
    const {_id} = useParams('');
    const [foodDetails, setFoodDetails] = useState([]);

    useEffect(() => {
        fetch('https://young-savannah-03336.herokuapp.com/getFoods')
        .then(res => res.json())
        .then(data => {
            setFoodDetails(data);
            console.log(data);
        })

    }, [])
    //
    //
    const foodData = foodDetails.find(foodInfo => foodInfo._id === _id)
    console.log(foodData);
    return (
        <div className="container">
            {foodData && 
                <div className="row food-detail-container">
                    <div className="foodInfo-txt col-md-8">
                        <h1>{foodData.name}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit recusandae, rerum exercitationem autem, error facere obcaecati ea, laboriosam at earum illo aliquam voluptatum mollitia id! Quaerat dolore inventore magni voluptatibus.</p>
                        <h3>${foodData.price}</h3>
                        <Link to={`/deliveryDetails/${foodData.name}`}>
                            <button className="btn primary-button"> <FontAwesomeIcon icon={faShoppingCart}/> ADD TO CART</button>
                        </Link>
                    </div>
                    <div className="food-image col-md-4">
                        <img src={foodData.imageURL} alt=""/>
                    </div>
                </div>
            }
        </div>
    );
};

export default FoodDetails;