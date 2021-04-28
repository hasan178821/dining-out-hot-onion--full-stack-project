import React, { useEffect, useState } from 'react';
import BreakFastCard from '../BreakFastCard/BreakFastCard';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getFoods')
        .then(res => res.json())
        .then(data => {
            setBreakfast(data);
            console.log(data);
        })
    }, [])

    const getBreakfast = breakfast.filter(breakFasts => breakFasts.foodType === 'Breakfast')
    return (
        <div className="row">
            {
                getBreakfast.map(breaks => <BreakFastCard breaks={breaks} key={breaks._id}></BreakFastCard>)
            }
        </div>
    );
};

export default Breakfast;