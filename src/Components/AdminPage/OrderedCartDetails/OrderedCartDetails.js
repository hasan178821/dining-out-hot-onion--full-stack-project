import React from 'react';
import './OrderedCartDetails.css';

const OrderedCartDetails = (props) => {
    const { name, foodName, address, phone, email, quantity, totalPrice } = props.dataOrder;
    return (
        <div className="row">
            <div className="col-md-4">
                <h6>Food Name</h6>
            </div>
            <div className="col-md-2">
                <h6>Quantity</h6>
            </div>
            <div className="col-md-3">
                <h6>Price</h6>
            </div>
            <div className="col-md-3">
                <h6>Action</h6>
            </div>
        </div>
    );
};

export default OrderedCartDetails;