import React, { useEffect, useState } from 'react';
import DinnerCard from '../DinnerCard/DinnerCard';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getFoods')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDinner(data);
        })
    }, [])

    const getDinner = dinner.filter(dinners => dinners.foodType === 'Dinner');
    return (
        <div className="row">
            {
                getDinner.map(singleDinner => <DinnerCard singleDinner={singleDinner} key={singleDinner._id}></DinnerCard>)
            }
        </div>
    );
};

export default Dinner;