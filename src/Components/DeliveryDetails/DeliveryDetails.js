import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {  useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DeliveryDetails.css';

const DeliveryDetails = () => {
    const {foodName} = useParams('');
    const { register, handleSubmit, errors } = useForm();
    const [placeOrder, setPlaceOrder] = useState([]);

    useEffect(() => {
        fetch('https://young-savannah-03336.herokuapp.com/getFoods')
        .then(res => res.json())
        .then(result => {
            // console.log(result);
            setPlaceOrder(result);
        })
    }, [])
    const placedInfo = placeOrder.find(ordered => ordered.name === foodName);
    // console.log(placedInfo);

    const onSubmit = data => {
        // console.log(data);
        const orderedData = {
            name: data.name,
            address: data.address,
            phone: data.number,
            email: data.email,
            foodName: placedInfo.name,
            totalPrice: placedInfo.price,
            quantity: 'feature come soon',
        }
        console.log(orderedData);

        fetch('https://young-savannah-03336.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(orderedData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })

        data.target.reset();
        window.location.replace('/location');
    }

    return (
        <>
            { placedInfo &&
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Full Name</label>
                            <input name="name" placeholder="Full Name" {...register("name")}  />

                            <label>Address</label>
                            <input name="address" placeholder="Street, Area, District, Country" {...register("address")}/>

                            <label>Phone Number</label>
                            <input name="number" placeholder="Your Phone Number" {...register("number")} />

                            <label>Email</label>
                            <input name="email" type="email" placeholder="Your E-mail" {...register("email")} />

                            
                            <input type="submit" value="Place Order" />
                        </form>
                    </div>

                    <div className="col-md-5 container placed-info-right">
                        <p className="text-center">Arriving in 20-30 minute</p>
                        <div className="d-flex ordered-mini-card justify-content-evenly align-items-center">
                            <div>
                                <img src={placedInfo.imageURL} alt=""/>
                            </div>
                            <div>
                                <h6>{placedInfo.name}</h6>
                                <h6 style={{color: 'red'}}>${placedInfo.price}</h6>
                            </div>
                            <div>
                                <h6>1</h6>
                            </div>
                        </div>

                        <div className="order-count mt-4 d-flex justify-content-evenly">
                        <div>
                            <p>Subtotal</p>
                            <p>Tax</p>
                            <p>Delivery Fee</p>
                            <hr/>
                            <p>TOTAL</p>
                        </div>
                        <div>
                            <p>${placedInfo.price}</p>
                            <p>$0</p>
                            <p>$0</p>
                            <hr/>
                            <p>${placedInfo.price}</p>
                        </div>
                    </div>
                    </div>

                </div>
            }
        </>
    );
};

export default DeliveryDetails;