import React, { useEffect, useState } from 'react';
import OrderedCartDetails from '../OrderedCartDetails/OrderedCartDetails';
import './OrderedCartData.css';

const OrderedCartData = () => {
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getOrderedInfo')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrdersData(data);
        })
    }, [])
    return (
        <div>
            <h1>this is an ORDERED CART DATA Page {ordersData.length}</h1>
            {
                ordersData.map(dataOrder => <OrderedCartDetails dataOrder={dataOrder}></OrderedCartDetails>)
            }
        </div>
    );
};

export default OrderedCartData;